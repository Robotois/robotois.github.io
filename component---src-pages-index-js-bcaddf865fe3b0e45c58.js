webpackJsonp([35783957827783],{121:function(e,t,a){e.exports=a.p+"static/block-editor.4b4428c1.png"},122:function(e,t,a){e.exports=a.p+"static/code-editor.9d85aa51.png"},37:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(125),l=s(r),o=a(129),n=s(o),i=a(128),c=s(i),u=a(123),d=s(u),f=a(124),m=s(f),p=a(130),E=s(p),g=a(121),h=s(g),v=a(122),b=s(v),y=a(127),x=s(y),N=a(126),_=s(N);t.default={pi3:l.default,shield:n.default,sensores:c.default,indicadores:d.default,motores:m.default,visualEditor:E.default,blockEditor:h.default,codeEditor:b.default,robotoisPlatform:x.default,robotoisHero:_.default},e.exports=t.default},123:function(e,t,a){e.exports=a.p+"static/indicadores.f1cb3d0e.png"},124:function(e,t,a){e.exports=a.p+"static/motores.e2ec7381.png"},125:function(e,t,a){e.exports=a.p+"static/pi-3.3e975b9d.png"},126:function(e,t,a){e.exports=a.p+"static/robotois-hero.90127094.png"},127:function(e,t,a){e.exports=a.p+"static/robotois-platform.bd051020.png"},128:function(e,t,a){e.exports=a.p+"static/sensores.51d9cb5b.png"},129:function(e,t,a){e.exports=a.p+"static/shield.9c74d753.png"},130:function(e,t,a){e.exports=a.p+"static/visual-editor.ac35128d.png"},212:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},l=a(1),o=s(l),n=a(134),i=a(37),c=s(i),u=function(e){var t=e.img;return o.default.createElement("div",{className:"column is-7-desktop has-text-centered"},o.default.createElement("figure",null,o.default.createElement("img",{src:c.default[t]})))},d=function(e){var t=e.title,a=e.subtitle,s=e.description;return o.default.createElement("div",{className:"column is-4-desktop"},o.default.createElement("div",{className:"content"},o.default.createElement("p",{className:"title primary-color"},t),o.default.createElement("p",{className:"subtitle primary-color"},a),o.default.createElement("p",null,s)))},f=function(e){var t=e.title,a=e.subtitle,s=e.description,r=e.img,l=e.isEven;return o.default.createElement("div",{style:{marginTop:"60px"}},o.default.createElement("div",{className:"tile is-child"},l?o.default.createElement("div",{className:"columns is-desktop is-centered"},o.default.createElement(u,{img:r}),o.default.createElement(d,{title:t,subtitle:a,description:s})):o.default.createElement("div",{className:"columns is-desktop is-centered"},o.default.createElement(d,{title:t,subtitle:a,description:s}),o.default.createElement(u,{img:r}))))},m=function(){return o.default.createElement("div",{className:"tile is-parent is-vertical"},n.features.map(function(e,t){return o.default.createElement(f,r({key:e.title},e,{isEven:(t+1)%2===0}))}))};t.default=m,e.exports=t.default},213:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var n=a(1),i=s(n),c=a(219),u=s(c),d=a(212),f=s(d),m=a(214),p=s(m),E=a(37),g=s(E),h=function(){return i.default.createElement("article",{className:"tile is-child notification primary-bg has-text-white has-text-centered"},i.default.createElement("p",{className:"title"},"Conoce la Plataforma Robotois"),i.default.createElement("p",{className:"subtitle"},"La herramienta para darle vida a tus Ideas"),i.default.createElement("div",{className:"columns is-desktop is-centered"},i.default.createElement("div",{className:"column is-four-fifths-desktop has-text-centered"},i.default.createElement("figure",null,i.default.createElement("img",{src:g.default.robotoisPlatform})))))},v=function(e){function t(){r(this,t);var a=l(this,e.call(this));return a.state={selected:0},a.changeSelected=a.changeSelected.bind(a),a}return o(t,e),t.prototype.changeSelected=function(e){var t=this;return function(){t.setState({selected:e})}},t.prototype.render=function(){var e=this.state.selected;return i.default.createElement("div",null,i.default.createElement("section",null,i.default.createElement("div",{className:"has-text-centered",style:{marginTop:50}},i.default.createElement("span",{className:"title primary-color"},"¿Qué es Robotois?"),i.default.createElement("div",{className:"content is-size-5"},i.default.createElement("p",null,"Robotois es una plataforma para aprender electrónica y crear tus propios robots."))),i.default.createElement(u.default,{selected:e,changeSelected:this.changeSelected}),i.default.createElement(h,null),i.default.createElement(f.default,null)),i.default.createElement(p.default,null))},t}(i.default.Component);t.default=v,e.exports=t.default},214:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=s(r),o=function(){return l.default.createElement("section",{className:"hero primary-bg"},l.default.createElement("div",{className:"hero-body"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"columns is-centered"},l.default.createElement("div",{className:"column is-three-quarters-desktop"},l.default.createElement("div",{className:"has-text-centered"},l.default.createElement("h1",{className:"title is-size-2 has-text-white"},"Nuestros Servicios"),l.default.createElement("h2",{className:"subtitle has-text-white"},"¿Tienes una gran Idea y necesitas ayuda?")),l.default.createElement("br",null),l.default.createElement("div",{className:"content is-size-5 has-text-white-ter"},l.default.createElement("p",null,"Nuestro equipo esta formado por Expertos en Ingeniería y Desarrollo de Software, hemos obtenido importantes logros en consultoría (",l.default.createElement("a",{className:"has-text-white has-text-weight-bold",href:"https://cromosfera.io/",target:"_blank"},"Cromosfera.io"),"). Aplicamos metodologías ágiles y usamos lo último en tecnología para crear productos a la medida enfocados en el usuario."),l.default.createElement("p",null,"Nuestro objetivo principal es proporcionar a nuestros clientes la ventaja competitiva que necesitan para crecer.")))),l.default.createElement("div",{className:"columns is-centered"},l.default.createElement("div",{className:"column is-half-desktop has-text-centered"},l.default.createElement("span",{className:"subtitle is-size-4 has-text-white"},"Envíanos un Correo a:  "),l.default.createElement("span",{className:"tag is-light is-medium is-size-5"},"hola@robotois.com"))))))};t.default=o,e.exports=t.default},134:function(e,t){"use strict";t.tois=[{title:"Cerebro del Kit",description:"Raspberry Pi 3 configurada con nuestra plataforma, lista para empezar a crear tus propios robots.",img:"pi3"},{title:"Super Toi",description:"La tarjeta robotois te permite utilizar todos nuestros componente de una manera sencilla y facil, cuenta con 6 entradas normales y 2 entradas para conectar hasta 6 motores.",img:"shield"},{title:"Sensores",description:"Un grupo de sensores que te ayudaran a crear asombrosos robots. Tendras sensores de temperatura, distancia, luz, humedad, movimiento, rotatorio y botones.",img:"sensores"},{title:"Indicadores",description:"Un grupo de indicadores que pueden ser configurados en conjunto con lo sensores para mostrar información, de una manera facil y sencilla. Tendras LEDs, LEDs RGB y un Display LCD.",img:"indicadores"},{title:"Motores",description:"Un grupo de dos motores y dos servomotores, que te ayudaran a crear robots que tengan movimiento, como un robot seguidor de line, un luchador de sumo y hasta un brazo robotico.",img:"motores"}],t.features=[{title:"Editor Visual",subtitle:"Selecciona y conecta tus Tois",img:"visualEditor",description:"La plataforma visual es una herramienta que permite seleccionar los Tois que usarás en tu práctica o proyecto.\nCon ésta podrás configurar la conexión de los Tois y los eventos a los cuales deben responder con acciones programables."},{title:"Dashboard",subtitle:"Visualiza el comportamiento tus Tois",img:"blockEditor",description:"El Dashboard es una herramienta para monitorear el estado actual de los Tois.\nCon esto podrás conocer a detalle el comportamiento de tu proyecto, tal como los valores de los Sensores, el estado de los Botones y LEDs, la velocidad de los Motores, posición actual de los Servomotores, etc."},{title:"Editores de Bloques y Código",subtitle:"Edita y perfeciona el código que ejecutará el Super Toi",img:"blockEditor",description:"El Editor de Código y de Bloques permite modificar el código que se va a ejecutar en el Super Toi.\nEn este código se pueden programar funciones pesecíficas y rutinas avanzadas.\nEl Super Toi cuenta con las herramientas necesarias para ejecutar las funciones del código."}]},215:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(213),l=s(r);t.default=l.default,e.exports=t.default},216:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=s(r),o=a(37),n=s(o),i=function(e){var t=e.title,a=e.description,s=e.img;return l.default.createElement("div",{className:"tile is-parent",style:{padding:"0px"}},l.default.createElement("article",{className:"tile is-child box"},l.default.createElement("p",{className:"subtitle is-size-4 primary-color"},t),l.default.createElement("figure",{className:"has-text-centered"},l.default.createElement("img",{src:n.default[s],alt:"Placeholder image"})),l.default.createElement("div",{className:"content",style:{marginTop:25}},l.default.createElement("p",null,a))))};t.default=i,e.exports=t.default},217:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=s(r),o=a(218),n=s(o),i=a(134),c=a(216),u=s(c),d=function(e){var t=e.selected,a=e.changeSelected;return l.default.createElement("div",{className:"container is-desktop",style:{marginTop:"75px",marginBottom:"75px"}},l.default.createElement("h1",{className:"title has-text-centered primary-color"},"¿Qué Incluye el Kit?"),l.default.createElement("div",{className:"columns is-desktop",style:{margin:"0",padding:"0px"}},l.default.createElement("div",{className:"column is-one-third-desktop"},l.default.createElement(n.default,{toisList:i.tois,selected:t,changeSelected:a})),l.default.createElement("div",{className:"column is-two-thrids-desktop"},l.default.createElement(u.default,i.tois[t]))))};t.default=d,e.exports=t.default},218:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=s(r),o={paddingTop:"35px",paddingBottom:"35px",margin:"0px",borderRadius:"10px",backgroundColor:"#5764C6"},n=function(e){var t=e.title;return l.default.createElement("div",{className:"notification is-size-5 has-text-centered has-text-weight-semibold has-text-white",style:o},t)},i=function(e){var t=e.title,a=e.changeSelected;return l.default.createElement("a",{className:"panel-block tois-menu",onMouseOver:a,style:{borderRadius:"10px",marginRight:"30px"}},t)},c=function(e){var t=e.title,a=e.isActive,s=e.changeSelected;return a?l.default.createElement(n,{title:t}):l.default.createElement(i,{title:t,changeSelected:s})},u=function(e){var t=e.toisList,a=e.selected,s=e.changeSelected;return l.default.createElement("nav",{className:"panel"},t.map(function(e,t){return l.default.createElement(c,{key:e.title,isActive:a===t,title:e.title,changeSelected:s(t)})}))};t.default=u,e.exports=t.default},219:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(217),l=s(r);t.default=l.default,e.exports=t.default},222:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=a(1),l=s(r),o=a(215),n=s(o),i=function(){return l.default.createElement(n.default,null)};t.default=i,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-bcaddf865fe3b0e45c58.js.map