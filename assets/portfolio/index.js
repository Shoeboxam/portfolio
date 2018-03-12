import m from 'mithril'
import "./index.css"
import Card from './views/Card'
import Sidebar from './views/Sidebar'

import svgBox from './images/box.svg'

import * as app from './app'


let icon = (name, callback) => m(`span#icon${name}`, {
    onclick: callback,
    style: {width: '100%', float: 'left', margin: '0 3px'}
}, m(`img#box`, {src: svgBox, width: '44px', height: '44px'}));

class Body {
    header() {
        return m('div#header', {
            style: {
                height: '200px',
                width: '100%',
                background: app.colGray
            }
        })
    }

    view(vnode) {
        // console.log(vnode.attrs.project);
        let sidebarWidth = '50px';
        return m('div#home', {
            style: {height: '100vh'}
        }, [
            m(Sidebar, {
                width: sidebarWidth,
                contents: [
                    m('div', {style: {height: '50px'}}),
                    ...app.projects.map((project) => icon(project['id'], () => m.route.set('/' + project['id'])))
                ]
            }),
            m('div#canvas', {
                    style: {
                        height: '100%',
                        width: `calc(100% - ${sidebarWidth})`,
                        background: app.colBackground,
                        'margin-left': sidebarWidth,
                        'overflow-x': 'hidden',
                        'overflow-y': 'auto'
                    }
                }, [
                    this.header(vnode.attrs),
                    app.projects.map((project) => m(Card, project))
                ]
            )
        ])
    }
}

class Autodiff {
    view(vnode) {
        let sidebarWidth = '50px';
        return m('div#home', {
            style: {height: '100vh'}
        },  [
            m(Sidebar, {
                width: sidebarWidth,
                contents: icon('home', () => m.route.set('/'))
            }),
            m('div#canvas', {
                    style: {
                        height: '100%',
                        width: `calc(100% - ${sidebarWidth})`,
                        background: app.colBackground,
                        'margin-left': sidebarWidth,
                        'overflow-x': 'hidden',
                        'overflow-y': 'auto'
                    }
                }
            )
        ])
    }
}

m.route.prefix("");
m.route(document.body, "/", {
    "/": Body,
    "/Autodiff": Autodiff,
    "/:project": Body
});

// m.mount(document.body, Body);
