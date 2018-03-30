import m from 'mithril'
import * as app from '../app'

export default class Card {
    view(vnode) {
        let {id, name, links, attrsAll} = vnode.attrs;

        return m(`div#card${id}`, Object.assign({
            class: ['card'],
            style: {margin: '20px auto', width: '100%', background: app.colGray}
        }, attrsAll), [
            m(`h3#cardTitle${id}`, {
                style: {
                    margin: '20px',
                    width: 'calc(100% - 40px)',
                    onclick: () => m.route.set("/" + id)
                }
            }, name),
            m(`div#cardContents${id}`, {
                style: {
                    margin: '20px'
                }
            }, vnode.children),
            links && m(`div#buttons${id}`,
                links.map((link, i) => m(`button.pure-button#${id + i}`, {
                    style: {margin: '.5em', 'background-color': app.colGray2},
                    type: 'button',
                    onclick: link.onclick,
                    target: '_blank'
                }, link.name))
            )
        ])
    }
}
