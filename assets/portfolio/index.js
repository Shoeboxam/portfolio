import '../../node_modules/purecss/build/pure-min.css'
import m from 'mithril'
import "./index.css"
import Card from './views/Card'


import * as app from './app'

class Body {
    oncreate(vnode) {
        let {project} = vnode.attrs;
        if (project) selectProject(project);
    }

    view(vnode) {
        // let {projectName} = vnode.attrs;
        return [
            m('a.menu-link', {href: '#menu'}, m('span')),
            m('div#menu',
                m('div.pure-menu', {display: 'inline-block'}, [
                    m('span.pure-menu-heading', 'Michael Shoemate'),
                    m('ul.pure-menu-list', [
                        app.projects.map((project) => m('li.pure-menu-item',
                            m('a.pure-menu-link', {onclick: () => selectProject(project.id)}, project.name)))
                    ])
                ])
            ),
            m('div#canvas',
                m('div#content', app.projects.map((project) => m(Card, project)))
            )
        ]
    }
}


export let selectProject = (project) => {
    if (app.projects.map((desc) => desc.id).indexOf(project) === -1) { m.route.set('/'); return; }

    document.getElementById('card' + project).scrollIntoView();
    document.getElementById('canvas').scrollTop -= 10;
    m.route.set("/" + project);
};

m.route.prefix("");
m.route(document.body, "/", {
    "/": Body,
    "/:project": Body
});
