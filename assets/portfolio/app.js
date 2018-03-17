import m from "mithril";

export let colBackground = '#f2f3ec';
export let colGray = '#EDEDF0';
export let colGray2 = '#CACAD3';
export let colDark = '#1e1e24';
export let colAccent = '#3E7D9B';
export let colAccent2 = '#3E9B5B';

export let colAccentLight = '#A8CBDC';

export let projects = [
    {
        id: 'Neural_Network_Library',
        name: 'Neural Network Library',
        description:
            'This is an independent implementation of a feedforward neural network without the use of popular differentiation libraries, such as Tensorflow or PyTorch. ' +
            'The code is written in Python, using the Numpy n-Dimensional array libary. ' +
            'Forward propagation, to produce a prediction, is a chain of matrix transforms and nonlinearities. ' +
            'Backpropagation, to produce a training update, is implemented via tensor products over batches of training stimuli. ' +
            '<br><br>' +
            'The library is split into a network class and optimizer classes (gradient descent, adagrad, nesterov accelerated momentum, etc.). ' +
            'The network exposes an interface to choose the quantity of layers and size/nonlinearities for each layer. Normalization may be enabled for inputs and outputs. ' +
            'Each optimizer class exposes an interface to choose step size, regularizers, and optimizer hyper-parameters. ' +
            '<br><br>' +
            'Optimizers may also be configured for batch-norm regularization, L2 regularization, dropout/dropconnect, gradient clipping, and more. ' +
            'Example problems have been included to demonstrate performance on fitting arbitrary vector functions, logic gates, a denoising autoencoder for figlet text-based fonts, and MNIST. ',
        links: [
            {
                name: 'Repository',
                url: 'https://github.com/Shoeboxam/Neural_Network'
            },
            {
                name: 'Visualization',
                url: 'http://shoemate.net/Autodiff/Demo'
            },
            {
                name: 'Explanation',
                url: 'https://shoeboxam.github.io/Neural_Network/'
            }
        ]
    },
    {
        id: 'Automatic_Differentiator',
        name: 'Automatic Differentiator',
        description:
            `The automatic differentiator is an alternative implementation of the Neural Network Library via 'propagation of gradients.' ` +
            'Each network layer is defined in its own class, with a forward propagation function and backpropagation function. ' +
            'This change in architecture permits branching and recurrent network topologies.',
        links: [
            {
                name: 'Repository',
                url: 'https://github.com/Shoeboxam/Neural_Network_Graph'
            }
        ]
    },
    {
        id: 'TwoRavens',
        name: 'TwoRavens',
        description:
            'I work for an organization called TwoRavens, developing tools for data collection and statistical analysis. ' +
            `My work has predominantly been focused on a tool called 'EventData' that is not yet released. ` +
            'This tool is a part of the broader linked repository.',
        links: [
            {
                name: 'Repository',
                url: 'https://github.com/TwoRavens/TwoRavens'
            }
        ]
    },
    {
        id: 'Autobot',
        name: 'Autobot',
        description: 'This is a self-driving car built with a raspberry PI. There are integrated sensors for tracking movement, location, and detecting objects.',
        links: [
            {
                name: 'Repository',
                url: 'https://github.com/Shoeboxam/Autobot'
            }
        ]
    },
    {
        id: 'DeepFashion',
        name: 'Deep Fashion',
        description:
            'This is an incomplete API that, when provided an image of a clothing article, suggests clothing on the market with a similar design.' +
            'To make these suggestions, a deep convolutional network is trained to map images to an embedded space with similarity learning. ' +
            'When a user supplies an image, the network maps the image to the embedding. ' +
            'Product listings located in a close proximity within the embedding are then suggested to the user.',
        links: [
            {
                name: 'Repository',
                url: 'https://github.com/FashionRecognition/DeepFashion'
            }
        ]
    },
    {
        id: 'Invictus',
        name: 'Invictus',
        description:
            'Invictus is my graphic-design project for Minecraft. I have developed and maintained the distribution since 2011. ' +
            'The project is a heavily extended distribution of a broader project named Soartex. ' +
            'When applied, the appearance of all game graphics are changed, and models are adjusted.',
        links: [
            {
                name: 'Repository',
                url: 'https://github.com/InvictusGraphics/Invictus_Textures'
            },
            {
                name: 'Website',
                url: 'https://soartex.net/'
            }
        ]
    },
    {
        id: 'Texture_Synthesis',
        name: 'Texture Synthesis',
        description:
            'This project is difficult to explain, but I made it to address an issue I saw with Minecraft retexturing for modifications to Minecraft. ' +
            'There are thousands of Minecraft mods that extend the game with new textures, and hundreds of resource packs (which change the textures). ' +
            'Typically, resource packs do not have support for modifications. However, many modifications only make minor changes to existing textures. ' +
            '<br><br>' +
            'This project first categorizes similar texture patterns across a large databank of 50,000+ images, collected by scraping modification source files. ' +
            'It then uses textures that a given resource pack has, to synthesize new textures for all images within shared texture categories. ' +
            'Finally, it saves the synthesized textures to a new resource pack with automatic support for widely-used game textures.' +
            '<br><br>' +
            'As part of this, I wrote a small Python PIL image wrapper (Raster) to simplify writing custom image filters and conducting analysis. ' +
            'The wrapper makes images stateful. A given filter specifies the requirements for the underlying data representation before operation.',
        links: [
            {
                name: 'Synthesis Repository',
                url: 'https://github.com/Shoeboxam/Texture_Synthesis'
            },
            {
                name: 'Raster Repository',
                url: 'https://github.com/Shoeboxam/Raster'
            }
        ]
    },
    {
        id: 'Cellular_Automata',
        name: 'Cellular Automata',
        description:
            'The program is just a simple interactive display of elementary cellular automata. It makes use of SDL for rendering and viewport manipulation.',
        links: [
            {
                name: 'Repository',
                url: 'https://github.com/Shoeboxam/Cellular_Automata'
            }
        ]
    }
];
