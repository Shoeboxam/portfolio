import m from 'mithril'

let getNetwork = () => {
    let menu = layers.map((layer, i) => [
        m('label', {for: 'layer' + i}, 'Layer ' + i),
        m('select#layer' + i, {
                value: layer['transform'],
                onchange: m.withAttr('value', (value) => setLayer(i, 'transform', value))
            },
            networkRange['basis'].map((transform) => m('option', transform))),
        m('input#layer' + i, {type: 'text', onblur: m.withAttr('value', (value) => setLayer(i, 'nodes', value))})
    ]);

    if (menu.length < 10) {
        menu.push([
            m('label', {for: 'newLayer'}, 'New'),
            m('select#newLayer', {
                    value: 'Select Basis',
                    onchange: m.withAttr('value', (value) => addLayer(layers.length, 'transform', value))
                },
                networkRange['basis'].map((transform) => m('option', transform))),
            m('input#newLayer', {type: 'text'})
        ])
    }
    return menu;
};


let getSettings = (range, type) => Object.keys(type).map((setting) => {
    let interaction;

    if (type[setting] === 'dropdown') interaction = m(`select#dropdown${setting}`, {
            value: 'Select Basis',
            onchange: m.withAttr('value', (value) => setUserHyperparameter(setting, value))
        },
        range[setting].map((option) => m('option', option)));

    else interaction = m('input#input' + setting.replace(/ /g, "_"), {
            type: 'text',
            onblur: m.withAttr('value', (value) => setUserHyperparameter(setting, value))
        });

    return [m(`#label${setting.replace(/ /g, "_")}`, setting), interaction]
});

export let problem = '';
export let setProblem = (prob) => problem = prob;

export let layers = [];

export let addLayer = (layer, field, value) => layers.push({[field]: value});
export let setLayer = (layer, field, value) => layers[layer][field] = value;
export let delLayer = (layer) => layers.splice(layer);

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
    'function': {
        'units': [10],
        'basis': ['bent', 'bent'],
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
        'units': [20, 10],
        'basis': ['bent', 'bent', 'logistic'],
        'distribute': 'uniform',

        'optimizer': 'GradientDescent',
        'iteration limit': 10000,
        'cost': 'sum squared',
        'batch size': 5,
        'learn step': .001,
        'noise variance': 1
    },
    'autoencoder': {
        'iteration limit': 10000,
        'units': [100],
        'basis': ['bent', 'logistic'],
        'distribute': 'normal',

        'optimizer': 'Adagrad',
        'batch size': 10,
        'cost': 'cross entropy',
        'learn step': 0.01,
        'debug frequency': 10
    }
};

let userHyperparameters = {};
let setUserHyperparameter = (setting, preference) => userHyperparameters[setting] = preference;

export let views = [
    {
        id: 'Problem',
        name: 'Problem',
        description:
        'Vector function: Fit a vector function.<br>' +
        'Logic Gate: Emulate a logic gate. XOR is widely used as an example of a non-linearly separable problem.<br>' +
        'Autoencoder: Denoise a figlet font.<br>',
        links: []
    },
    {
        id: 'Network',
        name: 'Network',
        description: m('#settingsForm.pure-form.pure-form-aligned', m('fieldset', getNetwork())),
        links: []
    },
    {
        id: 'Optimizer',
        name: 'Optimizer',
        description: m('#settingsForm.pure-form.pure-form-aligned', m('fieldset', getSettings(optimizerRange, optimizerType))),
        links: []
    },
    {
        id: 'Regularizers',
        name: 'Regularizers',
        description: m('#settingsForm.pure-form.pure-form-aligned', m('fieldset', getSettings(regularizerRange, regularizerType))),
        links: []
    },
    {
        id: 'View',
        name: 'View',
        description: 'PLOTS',
        links: []
    }
];
