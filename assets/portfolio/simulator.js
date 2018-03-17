export let views = [
    {
        id: 'ProblemSelect',
        name: 'Select a problem',
        description:
            'Vector function: Fit a vector function.<br>' +
            'Logic Gate: Emulate a logic gate. XOR is widely used as an example of a non-linearly separable problem.<br>' +
            'Autoencoder: Denoise a figlet font.<br>',
        links: []
    },
    {
        id: 'NetworkSelect',
        name: 'Customize the network',
        description: 'SETTINGS',
        links: []
    },
    {
        id: 'ProblemView',
        name: 'View training updates',
        description: 'PLOTS',
        links: []
    }
];


export let problem = '';
export let setProblem = (prob) => problem = prob;

export let layers = [];

export let addLayer = (layer, field, value) => layers.push({[field]: value});
export let setLayer = (layer, field, value) => layers[layer][field] = value;
export let delLayer = (layer) => layers.splice(layer);

export let shiftLayer = (layer, promote) => {
    let offset = promote ? 1 : -1;

    let temp = layers[layer];
    layers[layer] = layers[layer + offset];
    layers[layer + offset] = temp;
};


export let validHyperparameters = {
    // network parameters
    'units': [1, 200],
    'layers': [1, 10],
    'basis': [
        'identity', 'binary', 'relu', 'exponent', 'logistic', 'softplus', 'gaussian',
        'tanh', 'arctan', 'sinusoid', 'sinc', 'softsign', 'bent', 'log'
    ],
    'distribute': ['normal', 'uniform'],

    // optimizer parameters
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

    'normalize': [true, false],
    'normalize decay': [0, 100],

    'batch norm step': [0, 100],
    'batch norm decay': [0, 1],

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
