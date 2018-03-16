import m from 'mithril'
import * as app from '../app'

export default class Card {
    view(vnode) {
        let {id, name, description, links} = vnode.attrs;
        return m(`div#card${id}`, {
            class: ['card'],
            style: {margin: '10px auto', width: '100%', background: app.colGray},
            onclick: () => m.route.set("/" + id)
        }, [
            m(`h3#cardTitle${id}`, {
                style: {
                    margin: '20px',
                    width: 'calc(100% - 40px)'
                }
            }, name),
            m(`div#cardDesc${id}`, {
                style: {
                    width: '100%',
                    margin: '20px'
                }
            }, description),
            m(`div#buttons${id}`,
                links.map((link, i) => m(`button.pure-button#${id + i}`, {
                    style: {margin: '.5em', 'background-color': app.colGray2},
                    type: 'button',
                    onclick: () => location.href = link.url,
                    target: '_blank'
                }, link.name))
            )
        ])
    }
}
