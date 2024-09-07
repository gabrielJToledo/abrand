export const siteName = "SiteBaseMP1"

// Phones and DDD
export let phone = [];
// phone.push({ ddd: 12, num: '91111-1111' }) 

// Whatsapp
export let whatsapp = [];
// whatsapp.push({ ddd: 11, num: '92222-3232'})

// address
// export let address = [];
// address.push({street: 'Lorem Impsum', num: 222, district: 'Lorem Impsum'})

// Logo Image
// export const logo = require('./assets/logo.png')
// export const logoFooter = require('./assets/logoFooter.png')
// export const linkLogo = '/'

// E-mail
export const eMail = []
// eMail.push({email: 'contato@conoscenzadh.com'})

export let menu = [];
menu.push({name: 'Home', link: 'headerSection', isComponent: false})
menu.push({name: 'Menu', link: 'menu', isComponent: true})
menu.push({name: 'Contato', link: 'contactLink', isComponent: false})
// menu.push({name: 'Biblioteca', link: 'libraryId'})


export let menuDots = [];
menuDots.push({name: 'Página Inicial', link: 'headerSection', isComponent: false})
menuDots.push({name: 'Conheça o Chef', link: 'chefeLink', isComponent: false})
menuDots.push({name: 'Serviços do Chef', link: 'serviceLink', isComponent: false})
menuDots.push({name: 'Prato Principal', link: 'mainServiceLink', isComponent: false})
menuDots.push({name: 'Recomendação', link: 'recomendationLink', isComponent: false})
menuDots.push({name: 'Contato do Chef', link: 'contactLink', isComponent: false})
