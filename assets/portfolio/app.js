import m from 'mithril'

export let colBackground = '#f2f3ec';
export let colGray = '#EDEDF0';
export let colGray2 = '#CACAD3';
export let colDark = '#1e1e24';
export let colAccent = '#3E7D9B';
export let colAccent2 = '#3E9B5B';

export let colAccentLight = '#A8CBDC';

export let mobileMenu = false;
export let toggleMobileMenu = () => mobileMenu = !mobileMenu;

export let projects = [
    {
        id: 'TwoRavens',
        name: 'TwoRavens',
        children: () => m.trust(
            'I work for the research organization TwoRavens, developing tools for visualizing data and conducting statistical analysis. ' +
            'My work has been spread over several different projects: the core project, metadata service, and EventData. ' +
            `I also built a collection of reusable, modular UI components called 'common' for rapid and homogenous front-end development in Mithril. `),
        links: [
            {
                name: 'Website',
                onclick: () => location.href = 'http://2ravens.org'
            },
            {
                name: 'TwoRavens repository',
                onclick: () => location.href = 'https://github.com/TwoRavens/TwoRavens'
            },
            {
                name: 'Metadata repository',
                onclick: () => location.href = 'https://github.com/TwoRavens/metadata'
            },
            {
                name: 'Common repository',
                onclick: () => location.href = 'https://github.com/TwoRavens/common'
            }
        ]
    },
    {
        id: 'TwoRavens_EventData',
        name: 'TwoRavens EventData',
        children: () => m.trust(
            'One of my major projects at TwoRavens was developing tool for analyzing event data. ' +
            `The front-end uses UI state to construct database queries that are run against a Mongo database. ` +
            `An accompanying paper, 'TwoRavens for EventData' was published at the 2018 IEEE International Conference on Information Reuse and Integration (IRI). ` +
            'This tool is a part of the broader linked repository.'),
        links: [
            {
                name: 'EventData',
                onclick: () => location.href = 'http://eventdata.2ravens.org'
            },
            {
                name: 'Publication',
                onclick: () => location.href = 'https://ieeexplore.ieee.org/document/8424736'
            },
            {
                name: 'Repository',
                onclick: () => location.href = 'https://github.com/TwoRavens/TwoRavens'
            }
        ]
    },
    {
        id: 'Neural_Network_Library',
        name: 'Neural Network Library',
        children: () => m.trust(
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
            'Example problems have been included to demonstrate performance on fitting arbitrary vector functions, logic gates, a denoising autoencoder for figlet text-based fonts, and MNIST. '),
        links: [
            {
                name: 'Repository',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Neural_Network'
            },
            // {
            //     name: 'Simulator',
            //     onclick: () => m.route.set('/simulator')
            // },
            {
                name: 'Explanation',
                onclick: () => location.href = 'https://shoeboxam.github.io/Neural_Network/'
            }
        ]
    },
    {
        id: 'Automatic_Differentiator',
        name: 'Automatic Differentiator',
        children: () => m.trust(
            `The automatic differentiator is an alternative implementation of the Neural Network Library via 'propagation of gradients.' ` +
            'Each network layer type is defined in its own class, with a forward propagation function and backpropagation function. ' +
            'This change in architecture permits code encapsulation, and branching/recurrent network topologies.'),
        links: [
            {
                name: 'Repository',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Neural_Network_Graph'
            }
        ]
    },
    {
        id: 'Autobot',
        name: 'Autobot',
        children: () => m.trust(
            'This is a self-driving car built with a raspberry PI. ' +
            'There are integrated sensors for tracking movement, location, and detecting objects.'),
        links: [
            {
                name: 'Repository',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Autobot'
            }
        ]
    },
    {
        id: 'Applied_Mathematics',
        name: 'Applied Mathematics Collection',
        children: () => m.trust(
            'This is a collection of concrete implementations of abstract mathematical concepts, and machine learning model implementations using Numpy or common ML libraries. ' +
            'For example, one script demonstrates how to coax Tensorflow into computing a global hessian (instead of just the block diagonal matrices). ' +
            'There is also a fun example of an iterative optimization algorithm running in an infinite loop over a discontinuous polar function. ' +
            `Did you know 2D convolutions can be computed with an einstein summation? I wrote an example in the image processing folder. The sum is performed on a strided view of the image.`),
        links: [
            {
                name: 'Repository',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Applied_Mathematics'
            }
        ]
    },
    {
        id: 'Deep_Fashion',
        name: 'Deep Fashion',
        children: () => m.trust(
            'This is an incomplete API that detects attributes about articles of clothing. ' +
            'To make these suggestions, I scraped a dataset from eBay, then trained a deep convolutional network to map images to an embedded space with similarity learning. ' +
            'When a user supplies an image, the network maps the image to the embedded space. ' +
            'The detected attributes are the attributes of the nearest labeled article of clothing in the embedded space.'
        ),
        links: [
            {
                name: 'Repository',
                onclick: () => location.href = 'https://github.com/FashionRecognition/DeepFashion'
            }
        ]
    },
    {
        id: 'Invictus',
        name: 'Invictus',
        children: () => m.trust(
            'Invictus is my graphic-design project for Minecraft. I have developed and maintained the distribution since 2011. ' +
            'The project is a heavily extended distribution of a broader project named Soartex. ' +
            'When applied, the appearance of all game graphics are changed, and models are adjusted.'),
        links: [
            {
                name: 'Repository',
                onclick: () => location.href = 'https://github.com/InvictusGraphics/Invictus_Textures'
            },
            {
                name: 'Website',
                onclick: () => location.href = 'https://soartex.net/'
            }
        ]
    },
    {
        id: 'Texture_Synthesis',
        name: 'Texture Synthesis',
        children: () => m.trust(
            'I built this project to address an issue I saw with Minecraft retexturing for modifications to Minecraft. ' +
            'There are thousands of Minecraft mods that extend the game with new textures, and hundreds of resource packs (which change the textures). ' +
            'Typically, resource packs do not have support for modifications. However, many modifications only make minor changes to existing textures. ' +
            '<br><br>' +
            'This project first categorizes similar texture patterns across a large databank of 50,000+ images, collected by scraping modification source files. ' +
            'It then uses textures that a given resource pack has, to synthesize new textures for all images within shared texture categories. ' +
            'Finally, it saves the synthesized textures to a new resource pack with automatic support for widely-used game textures.' +
            '<br><br>' +
            'As part of this, I wrote a small Python PIL image wrapper (Raster) to simplify writing custom image filters and conducting analysis. ' +
            'The wrapper makes images stateful. A given filter specifies the requirements for the underlying data representation before operation.'),
        links: [
            {
                name: 'Synthesis Repository',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Texture_Synthesis'
            },
            {
                name: 'Raster Repository',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Raster'
            }
        ]
    },
    {
        id: 'Cellular_Automata',
        name: 'Cellular Automata',
        children: () => m.trust(
            'The program is just a simple interactive display of elementary cellular automata. ' +
            'It is a C++ program that makes use of SDL (Simple DirectMedia Layer), an interface for OpenGL, for rendering and viewport manipulation.'
        ),
        links: [
            {
                name: 'Repository',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Cellular_Automata'
            }
        ]
    },
    {
        id: 'News_Article_NLP',
        name: 'News Article NLP',
        children: () => m.trust(
            'I met a professor with a passion for analyzing conflict in Guyana, so I wrote a script to automate the collection of news articles of one of the more popular news agencies in Guyana, Stabroek News. ' +
            'I conducted some basic named entity recognition on the collected SQLite database with the NLTK Python library. '
        ),
        links: [
            {
                name: 'Repository',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Guyana_News'
            }
        ]
    },
    {
        id: 'Data_Structures',
        name: 'Data Structures',
        children: () => m.trust(
            'I have a few repositories with collections of data structure implementations in C++. I know the basics!'
        ),
        links: [
            {
                name: 'Older Containers',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Data_Structures'
            },
            {
                name: 'Newer Containers',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Basic_Data_Structures'
            }
        ]
    },
    {
        id: 'Miscellaneous',
        name: 'Miscellaneous',
        children: () => m.trust(
            `There's too much Python, so here's some work I did in other languages. `,
            'I wrote an android app for location-based chat rooms. ' +
            'The app is written in Java, and the backend is a flask server with user data managed in mySql. ' +
            'I thought it would be fun to write a Minecraft Java modification that implements git version control commands in the Minecraft chat box. ' +
            'There is a website called data.gov that acts as a portal for government-hosted datasets. I wanted a way to quickly download datasets from the command-line, so I wrote a small client in C# that uses their REST API. ' +
            'I wrote a console-based Othello board game in Java, with multiplayer and AIs. ' +
            'I also got interested in graphics programming, so I wrote a collection of GLSL shaders. '),
        links: [
            {
                name: 'Local Chat',
                onclick: () => location.href = 'https://github.com/LocalChat-SE'
            },
            {
                name: 'Git Commands',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Gitstream'
            },
            {
                name: 'data.gov Client',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Data_Aggregator'
            },
            {
                name: 'Othello',
                onclick: () => location.href = 'https://github.com/Shoeboxam/Othello'
            },
            {
                name: 'GLSL Shaders',
                onclick: () => location.href = 'https://github.com/Shoeboxam/GLSL_Shaders'
            }
        ]
    }
];
