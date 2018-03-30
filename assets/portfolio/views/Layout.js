import m from 'mithril'
import * as app from "../app";

export default class Layout {
    view(vnode) {
        let {panel, main} = vnode.attrs;

        return [
            m('a#menuTab.menu-link', {onclick: app.toggleMobileMenu}, m('#hamburger.icono-hamburger', {
                style: {
                    transform: 'scale(1.3, 1.3)',
                    'margin-left': '10px',
                    'margin-top': '17px'
                }
            })),
            m('div#menu', {
                    class: !app.mobileMenu && ['hideMobile'],
                },
                m('div.pure-menu', [
                    m('span.pure-menu-heading', {
                        onclick: () => m.route.set('/')
                    }, 'Michael Shoemate'),
                    m('ul.pure-menu-list', panel)
                ])
            ),
            m('div#canvas', m('div#content', main))
        ]
    }
}
