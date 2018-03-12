import m from 'mithril'
import {Body} from '../index.js'

export default class Card {
    view(vnode) {
        let {id, name, description} = vnode.attrs;
        return m(`div#card${id || name}`, {
            class: ['card'],
            style: {margin: '10px auto', width: 'calc(100% - 20px)'},
            onclick: () => m.route.set("/" + id)
        }, [
            m(`h3#cardTitle${id}`, {
                style: {
                    margin: '20px',
                    width: '100%'
                }
            }, name),
            m(`div#cardDesc${id}`, {
                style: {
                    width: '100%',
                    margin: '20px'
                }
            }, description)
        ])
    }
}
