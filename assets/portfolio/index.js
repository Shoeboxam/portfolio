import '../../node_modules/purecss/build/pure-min.css'
import '../../node_modules/icono/build/icono.css'

import m from 'mithril'
import "./index.css"
import Card from './views/Card'
import Layout from './views/Layout'

import * as app from './app'
import * as sim from './simulator'

class Home {
    oncreate(vnode) {
        let {project} = vnode.attrs;
        if (project) selectCard(project);
    }

    view(vnode) {
        return m(Layout, {
            panel: app.projects.map((project) => m('li.pure-menu-item', m('a.pure-menu-link',
                {onclick: () => selectCard('', project.id)},
                project.name
            ))),
            main: app.projects.map((project) => m(Card, Object.assign(
                {attrsAll: {onclick: () => m.route.set("/" + project.id)}},
                project
            )))
        })
    }
}

class Simulator {
    oncreate(vnode) {
        let {stage} = vnode.attrs;
        if (stage) selectCard(stage);
    }

    view(vnode) {
        return m(Layout, {
            panel: sim.views.map((view) => m('li.pure-menu-item', m('a.pure-menu-link',
                {onclick: () => selectCard('simulator/', view.id)},
                view.name
            ))),
            main: sim.views.map((view) => m(Card, view))
        })
    }
}

export let selectCard = (path, card) => {
    try {
        if (app.mobileMenu) app.toggleMobileMenu();
        document.getElementById('card' + card).scrollIntoView();
        document.getElementById('canvas').scrollTop -= 10;
        m.route.set("/" + path + card);
    } catch (err) {
        m.route.set('/' + path);
    }

};

m.route.prefix("");
m.route(document.body, "/", {
    "/": Home,
    "/simulator": Simulator,
    "/simulator/:stage": Simulator,
    "/:project": Home
});
