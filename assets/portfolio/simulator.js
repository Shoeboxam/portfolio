import m from 'mithril'

// ~~~~~ declare menu content first ~~~~~
let vecFunctions = {
    'x^2': 'Function description 1',
    '3*x^3 + 23': 'Function description 2'
};
let logicGates = {
    'XOR': 'XOR is an example of a non-linearly separable problem.',
    'combination': 'Logic gate desc 2',
};

// acceptable network parameters
export let networkRange = {
    'units': [1, 200],
    'layers': [1, 10],
    'basis': [
        'identity', 'binary', 'relu', 'exponent', 'logistic', 'softplus', 'gaussian',
        'tanh', 'arctan', 'sinusoid', 'sinc', 'softsign', 'bent', 'log'
    ],
    'distribute': ['normal', 'uniform'],

    'normalize': [true, false],
    'normalize decay': [0, 100],
};

// types of input for network fields
export let networkType = {
    'units': 'integer',
    'layers': 'integer',
    'basis': 'dropdown',
    'distribute': 'dropdown',

    'normalize': 'dropdown',
    'normalize decay': 'real',
};


// acceptable optimizer parameters
export let optimizerRange = {
    'optimizer': [
        'GradientDescent', 'Momentum', 'Nesterov', 'Adagrad',
        'RMSprop', 'Adam', 'Adamax', 'Nadam', 'Quickprop'
    ],
    'iteration limit': [1, 10000],

    'cost': ['sum squared', 'cross entropy'],
    'batch size': [1, 100],

    'learn step': [-1000, 1000],
    'learn anneal': ['fixed', 'linear', 'inverse', 'power', 'exp'],
    'learn decay': [-100, 100],

    'batch norm step': [0, 100],
    'batch norm decay': [0, 1],
};

// types of input for optimizer fields
export let optimizerType = {
    'optimizer': 'dropdown',
    'iteration limit': 'integer',

    'cost': 'dropdown',
    'batch size': 'integer',

    'learn step': 'real',
    'learn anneal': 'dropdown',
    'learn decay': 'real',

    'batch norm step': 'real',
    'batch norm decay': 'real',
};

// acceptable inputs for regularizers
export let regularizerRange = {
    'regularize step': [0, 100],
    'regularizer': ['none', 'L1', 'L2', 'L12'],

    'dropout step': [0, 100],
    'dropconnect step': [0, 100],

    'weight clip': ['none', 'soft', 'hard'],
    'weight threshold': [0, 100000],

    'gradient clip': ['none', 'soft', 'hard'],
    'gradient threshold': [0, 10000],

    'noise variance': [0, 100],
    'noise anneal': ['fixed', 'linear', 'inverse', 'power', 'exp'],
    'noise decay': [-100, 100]
};

// types of input for regularizer fields
export let regularizerType = {
    'regularize step': 'real',
    'regularizer': 'dropdown',

    'dropout step': 'real',
    'dropconnect step': 'real',

    'weight clip': 'dropdown',
    'weight threshold': 'real',

    'gradient clip': 'dropdown',
    'gradient threshold': 'real',

    'noise variance': 'real',
    'noise anneal': 'dropdown',
    'noise decay': 'real'
};

export let defaultHyperparameters = {
    'vector function': {
        'network': [
            {'units': 10, 'basis': 'bent'}
        ],
        'distribute': 'normal',

        'optimizer': 'Adagrad',
        'iteration limit': 10000,
        'learn step': 0.001,
        'batch size': 100,
        'cost': 'sum squared',
        'normalize': true,
        'learn anneal': 'power',
        'learn decay': .99,
        'debug frequency': 10
    },
    'logic gate': {
        'network': [
            {'units': 10, 'basis': 'bent'},
            {'units': 20, 'basis': 'logistic'}
        ],
        'distribute': 'uniform',

        'optimizer': 'GradientDescent',
        'iteration limit': 10000,
        'cost': 'sum squared',
        'batch size': 5,
        'learn step': .001,
        'noise variance': 1
    },
    'figlet autoencoder': {
        'network': [
            {'units': 100, 'basis': 'bent'}
        ],
        'iteration limit': 10000,
        'distribute': 'normal',

        'optimizer': 'Adagrad',
        'batch size': 10,
        'cost': 'cross entropy',
        'learn step': 0.01,
        'debug frequency': 10
    }
};

// ~~~~ build menus ~~~~

let problemMenu = () => m('div.pure-form.pure-g-r',
    m('div.pure-u-1-2',
        m('div.pure-g-r',
            m('div.pure-u-1-2', {style: {'text-align': 'right'}}, m('label', {for: 'problemSelect', style: {'margin-right': '1em'}}, 'Problem Type ')),
            m('select.pure-u-1-2#problemType', {
                    value: currentProblem,
                    onchange: m.withAttr('value', (value) => setCurrentProblem(value))
                },
                Object.keys(problemConfigurations).map((prob) => m('option', prob))
            )
        ),
        m('div.pure-u-1', problemConfigurations[currentProblem].description)
    ),
    m('div.pure-u-1-2#problemFocusMenu', problemConfigurations[currentProblem].content())
);

export let currentProblem = 'vector function';
export let setCurrentProblem = (prob) => {
    currentProblem = prob;
    setCurrentConfiguration();
};

export let currentConfiguration = {
    'vector function': 'x^2',
    'logic gate': 'XOR',
    'figlet autoencoder': 'default'
};
export let setCurrentConfiguration = (config) => {
    if (config === undefined) config = currentConfiguration[currentProblem];
    else currentConfiguration[currentProblem] = config;

    if (userSettings[currentProblem] === undefined) userSettings[currentProblem] = {};
    if (userSettings[currentProblem][config] === undefined) userSettings[currentProblem][config] = {};
    if (userSettings[currentProblem][config]['network'] === undefined) {
        userSettings[currentProblem][config]['network'] = defaultHyperparameters[currentProblem]['network'];
    }
};

let problemConfigurations = {
    'vector function': {
        description: 'Fit a vector function',
        content: () => m('div.pure-g-r',
            m('div.pure-u-1-2', {style: {'text-align': 'right'}}, m('label', {for: 'functionSelect', style: {'margin-right': '1em'}}, 'Select Function')),
            m('select.pure-u-1-2#functionSelect', {
                    onchange: m.withAttr('value', (value) => setCurrentConfiguration(value))
                },
                Object.keys(vecFunctions).map((prob) =>
                    m('option', currentConfiguration[currentProblem] === prob && {selected: 'selected'}, prob))
            ),
            m('div.pure-u-1', vecFunctions[currentConfiguration[currentProblem]])
        )
    },
    'logic gate': {
        description: 'Emulate a logic gate.',
        content: () => m('div.pure-g-r',
            m('div.pure-u-1-2', {style: {'text-align': 'right'}}, m('label', {for: 'logicSelect', style: {'margin-right': '1em'}}, 'Select Gate')),
            m('select.pure-u-1-2#logicSelect', {
                    onchange: m.withAttr('value', (value) => setCurrentConfiguration(value))
                },
                Object.keys(logicGates).map((gate) =>
                    m('option', currentConfiguration[currentProblem] === gate && {selected: 'selected'}, gate))
            ),
            m('div.pure-u-1', logicGates[currentConfiguration[currentProblem]])
        )
    },
    'figlet autoencoder': {
        description: 'Denoise a figlet font.',
        content: () => m('div', 'FIGLET STUFF')
    }
};

let networkMenu = () => {
    let config = userSettings[currentProblem][currentConfiguration[currentProblem]];

    let menu = config['network'].map((layer, i) => m('div.pure-form.pure-g-r',
        m('div#addLayer.pure-button.icono-cross', {
            style: {color: 'gray'},
            onclick: (e) => {e.stopPropagation(); delLayer(i)}
        }),
        m('div.pure-u-1-5', m(`#labelLayer${i}`, {
            style: {'text-align': 'right', 'margin-right': '1em'},
            for: layer + i
        }, 'Layer ' + i)),
        m('select.pure-u-1-5#layer' + i, {
                value: layer['basis'],
                onchange: m.withAttr('value', (value) => setLayer(i, 'basis', value))
            },
            networkRange['basis'].map((basis) => m('option',
                m('option', config['network'][i]['basis'] === basis && {selected: 'selected'}, basis)))),
        m('input.pure-u-1-5#layer' + i, {
            type: 'text',
            value: config['network'][i]['units'],
            onblur: m.withAttr('value', (value) => setLayer(i, 'units', value))})
    ));

    if (menu.length < 10) {
        menu.push(m('div#addLayer.pure-button.icono-plus', {
            style: {color: 'gray'},
            onclick: addLayer
        }))
    }
    return menu;
};

export let addLayer = () => {
    let config = userSettings[currentProblem][currentConfiguration[currentProblem]];
    config['network'].push({
        units: 20,
        basis: 'bent'
    });
};
export let setLayer = (layer, field, value) => {
    let config = userSettings[currentProblem][currentConfiguration[currentProblem]];
    config['network'][layer][field] = value;
};
export let delLayer = (layer) => {
    let config = userSettings[currentProblem][currentConfiguration[currentProblem]];
    config['network'].splice(layer, 1);
};


let getForm = (range, type, field) => {
    let interaction;

    if (type[field] === 'dropdown') interaction = m(`select.pure-u-1-2#input${field}`, {
            style: {float: 'right', width: '50%'},
            onchange: m.withAttr('value', (param) => setUserSetting(field, param))
        },
        range[field].map((option) => m('option', getUserSetting(field) === option && {selected: 'selected'},  option)));

    else interaction = m('input.pure-u-1-2#input' + field.replace(/ /g, "_"), {
        style: {float: 'right', width: '50%'},
        type: 'text',
        value: getUserSetting(field),
        onblur: m.withAttr('value', (param) => setUserSetting(field, param))
    });

    return m('div.pure-u-1-2.pure-control-group', [
        m('div.pure-g-r', [
            m('div.pure-u-1-2', m(`#label${field.replace(/ /g, "_")}`, {
                style: {'text-align': 'right', 'margin-right': '1em'},
                for: 'input' + field.replace(/ /g, "_")
            }, field)),
            interaction
        ])
    ])
};

// stores settings per problem configuration
export let userSettings = {};
export let setUserSetting = (field, value) => {
    userSettings[currentProblem][currentConfiguration[currentProblem]][field] = value;
};
export let getUserSetting = (field) => {
    let currentConfig = currentConfiguration[currentProblem];
    return (((userSettings[currentProblem] || {})[currentConfig] || {})[field]) || (defaultHyperparameters[currentProblem] || {})[field];
};

// ensure settings are properly initialized on page load
setCurrentConfiguration(currentConfiguration[currentProblem]);

export let views = [
    {
        id: 'Problem',
        name: 'Problem',
        children: problemMenu
    },
    {
        id: 'Network',
        name: 'Network',
        children: networkMenu
    },
    {
        id: 'Optimizer',
        name: 'Optimizer',
        children: () => m('form#settingsForm.pure-form.pure-form-aligned',
            m('fieldset.pure-g-r', Object.keys(optimizerRange)
                .map((key) => getForm(optimizerRange, optimizerType, key)))),
    },
    {
        id: 'Regularizers',
        name: 'Regularizers',
        children: () => m('form#settingsForm.pure-form.pure-form-aligned',
            m('fieldset.pure-g-r', Object.keys(regularizerRange)
                .map((key) => getForm(regularizerRange, regularizerType, key)))),
    },
    {
        id: 'View',
        name: 'View',
        children: () => 'PLOTS'
    }
];
