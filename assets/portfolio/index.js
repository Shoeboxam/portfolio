import '../../node_modules/purecss/build/pure-min.css'
import m from 'mithril'
import "./index.css"
import Card from './views/Card'

import svgBox from './images/box.svg'

import * as app from './app'


let icon = (name, callback) => m(`span#icon${name}`, {
    onclick: callback,
    style: {width: '100%', float: 'left', margin: '0 3px'}
}, m(`img#box`, {src: svgBox, width: '44px', height: '44px'}));

class Body {

    view(vnode) {
        // let {projectName} = vnode.attrs;

        return [
            m('a.menu-link', {href: '#menu'}, m('span')),
            m('div#menu',
                m('div.pure-menu', {display: 'inline-block'}, [
                    m('span.pure-menu-heading', 'Michael Shoemate'),
                    m('ul.pure-menu-list', [
                        app.projects.map((project) => m('li.pure-menu-item', m('a.pure-menu-link', project.name)))
                    ])
                ])
            ),
            m('div#canvas',
                m('div#content', app.projects.map((project) => m(Card, project)))
            )
        ]
    }
}

m.route.prefix("");
m.route(document.body, "/", {
    "/": Body,
    "/:project": Body
});

// m.mount(document.body, Body);
