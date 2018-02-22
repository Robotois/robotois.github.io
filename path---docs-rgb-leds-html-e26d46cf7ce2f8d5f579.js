webpackJsonp([0xda33f98ba7f3],{362:function(n,a){n.exports={data:{markdownRemark:{html:'<p>En esta documentación se mostrará cómo utilizar el módulo de LEDs RGB, en donde se presentarán ejemplos prácticos con los cuales se tendrá un panorama general sobre la utilizad de este módulo. Las aplicaciones de este módulo que se consideran relevantes son las siguientes: se puede utilizar como una lampara RGB, con la cual se podría iluminar un área pequeña; un indicador de eventos, en donde se podrían mostrar la ocurrencia de diversos eventos, uno por cada color.</p>\n<p>El módulo de LEDs RGB, consiste en un arreglo de LEDs para los cuales puede ser configurado el color a mostrar. Los colores a mostrar serán especificados siguiendo el formato RGB (<em>Red, Green, Blue</em>).</p>\n<h1 id="instalación-de-la-librería"><a href="#instalaci%C3%B3n-de-la-librer%C3%ADa" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Instalación de la librería</h1>\n<p>La instalación de la librería se puede realizar de dos maneras, usando el gestor de paquetes <a href="https://www.npmjs.com/package/robotois-rgb-leds"><strong>npm</strong></a>, y descargando la última versión disponible en <a href="https://github.com/Robotois/robotois-rgb-leds"><strong>GitHub</strong></a>.</p>\n<ul>\n<li>Usando el gestor <strong>npm</strong>, la instalación se realiza de la siguiente manera:</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-shell"><code>npm install robotois-rgb-leds</code></pre>\n      </div>\n<ul>\n<li>Para instalar la última versión, se debe descargar el repositorio en <strong>Github</strong> de la siguiente manera:</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-shell"><code>git clone https://github.com/Robotois/robotois-rgb-leds.git</code></pre>\n      </div>\n<p>y posteriormente se deben instalar las dependencias, también es necesario compilar la librería. Lo anterior se realiza ejecutando en consola, dentro del directorio del repositorio recien descargado (<code>cd robotois-rgb-leds</code>): <code>npm install</code>.</p>\n<p>Otra opción para instalar la librería es usar el gestor <em>npm</em> para descargar el repositorio:</p>\n<p><code>npm install git+https://github.com/Robotois/robotois-rgb-leds.git</code></p>\n<p>Esta opción es la mas recomendada para usar la versión mas actual del repositorio, ya que de manera automática se instala la librería en la carpeta <code>node_modules</code> del proyecto.</p>\n<h1 id="conexión-al-shield"><a href="#conexi%C3%B3n-al-shield" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conexión al Shield</h1>\n<p>El módulo de LEDs RGB se puede conectar a cualquiera de los conectores genéricos del Shield, que son los conectores <code>1-6</code>. La comunicación se realiza usando el puerto <strong>IIC</strong>, por ello no es necesario especificar el conector del Shield al cual éste se conecta. No obstante, es importante notar que los conectores <code>M1-M2</code> son designados a módulos electromecánicos como motores y servomotores.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 258px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 128.29457364341087%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAIAAAA44esqAAAACXBIWXMAAAsSAAALEgHS3X78AAADH0lEQVQ4y42T62rjRhTH/awtfYhS+qHtK/TD9h0KhcJm01J2aYLLLlsS33S3bFm2rLtGc5+RbKlHduJAWYjlkfnPGf3OTUej42tX13VKqbwsygp+ZVGhGuPz0ehVuO97VNdZzdA2zifTmos4Sdu2Aaevw13fUcyNehGwLcW9Q9t9XrbNdXDfdwSTFdonbMLIfci6OC+ujXxKG+rsJfuXop+l6tO8aK6O3Nc1LmtG5AHxA5NNmldXw12PCd6n2PeFbdMwknlVXgt3XU8o2cZ1sDpuV12wUXlVNPpqmHMW7vLJhHz4UK7WpKiKw+FwFfycfBfuqtu/HGh+27bg86ohOQ8ZtI0y/jANQUDY/08YWJ6NL6JtD0O3sbwbL+/GnmnvvwCffHeXqx82x7MFdLTHj7P1CRuevMR7gpVq/TWiVMERF+1yVQnRYKJBwKtyvPLvsQ8wVHsJO8CwCfep59Hb23g2r7dxZlrk3bvIMMnDY/3Hn5Hjso+fyvfvEz+od0my2sR5icDRAGutN/tsvWrMRev7usJ66WnPOpqWtEzpu0fDFK6pPPsYRgpqkLqtMH2BozRf+tIylOPyinLH4bapTIvNF8yxtGEyw+C23Rh29uaXNz/8+NPd/f25bSPdNFFalLXIEK+IwFxWVIAo8emfnDXHXG92ybffff/V19+8vbk91z9iXE9n2HW068mi5kRI4JmSXDVCtoPQCoxUyqyUvn9c+p3n46cJ84MS2uOYh6XbpiWDhwBeBmiyKGZWYfpoYZdJycFLnInpg/j4D/v19zFlQ9mjpjmYNjUtYVgsf46cVmy7p7uYxQXdJRRKYEpFKVsY3DA5fBswAkPDMJGPE+S52vNkjp5giM+kZqI5CQUWImWSc9MU8zmfLmIoeEh7vUE3N/v5RDt2c0mbCKhTXQThCiJD2g+fxXjMfnv7iTJ2Trv1V3QTNutAQm+paBCFzuMMkdMaRFrhirKskutABYGKIvnynsM4ThHKEEpKlBUsiNKZs1y4/vNawdYNtuAor+swyeI8f4LhZpzXmAyLDAtT+sU1nGKCMFFKnz+P/wC6cb2+dO1xCwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Conexión al Shield"\n        title=""\n        src="/static/rgb-shield-ecc16d685f4f9eb6850968f9003d529c-b0ddb.png"\n        srcset="/static/rgb-shield-ecc16d685f4f9eb6850968f9003d529c-c58d4.png 210w,\n/static/rgb-shield-ecc16d685f4f9eb6850968f9003d529c-b0ddb.png 258w"\n        sizes="(max-width: 258px) 100vw, 258px"\n      />\n    </span>\n  </span>\n  </p>\n<h1 id="inicialización-de-la-librería"><a href="#inicializaci%C3%B3n-de-la-librer%C3%ADa" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Inicialización de la librería</h1>\n<p>La inicialización de esta librería es bastante sencilla, y se realiza de la siguiente manera:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code><span class="token keyword">const</span> RGBs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'robotois-rgb-leds\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> rgb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RGBs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Con esto ya es posible hacer uso de las funcionalidades disponibles.</p>\n<h1 id="funcionalidades-de-la-librería"><a href="#funcionalidades-de-la-librer%C3%ADa" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Funcionalidades de la librería</h1>\n<p>En esta sección se describen y se dan ejemplos de las funciones con las que se cuenta en esta librería.</p>\n<h2 id="setrgb"><a href="#setrgb" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>setRGB()</code></h2>\n<p>La función <code>setRGB()</code> permite establecer el color un LED en particular, el color debe ser especificado en formato numérico, con <strong>8 bits</strong> por cada canal de color, es decir que cada canal puede recibir un número en el siguiente rango <code>0-255</code>.</p>\n<p>A continuación se muestra un ejemplo, en donde se muestra un color específico en el LED número <code>1</code>, para probar el funcionamiento de este módulo se recomienda usar la siguiente <a href="https://www.w3schools.com/colors/colors_picker.asp">página</a> y así tener la referencia del color que se va a mostrar en los LEDs:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code><span class="token keyword">const</span> RGB <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'robotois-rgb-leds\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> rgb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RGB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nrgb<span class="token punctuation">.</span><span class="token function">setRGB</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">204</span><span class="token punctuation">,</span> <span class="token number">51</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  rgb<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="turnon-y-turnoff"><a href="#turnon-y-turnoff" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>turnOn()</code> y <code>turnOff()</code></h2>\n<p>Por otro lado, la función <code>turnOn()</code> tiene un funcionamiento similar al de la función <code>setRGB</code>, la diferencia radica en que el formato para el color es <strong>Hexadecimal</strong>. Se tiene esta función debido a que el formato <em>hexadecimal</em> es ampliamente utilizado y puede ayudar a facilitar el desarrollo de ciertas aplicaciones, de igual forma que en el caso anterior se puede usar como referencia la siguiente <a href="https://www.w3schools.com/colors/colors_picker.asp">página</a>.</p>\n<p>Para probar esta función, se puede usar como base el ejemplo anterior:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code>rgb<span class="token punctuation">.</span><span class="token function">turnOn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">\'#cc3399\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>La función <code>turnOff()</code> como su nombre lo indica, apaga el led especificado, por ejemplo para apagar el LED <code>1</code> sería:  <code>rgb.turnOff(1);</code></p>\n<h2 id="función-toggle"><a href="#funci%C3%B3n-toggle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Función <code>toggle()</code></h2>\n<p>La función <code>toggle()</code> cambia el estado actual del LED especificado, es decir, que si éste se encuentra apagado, lo enciende; pero si el LED está encendido, lo apaga. El parámetro que recibe esta función es el color RGB en <em>hexadecimal</em> que tendrá el LED. Un ejemplo práctico sería el siguiente:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code><span class="token keyword">const</span> RGB <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'robotois-rgb-leds\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> rgb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RGB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  rgb<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">16777215</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  rgb<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">16777215</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  rgb<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">16777215</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  rgb<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">16777215</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>En este ejemplo se encienden y apagan todos los LEDs, como se observa se establece el color de los LEDs de manera aleatoria, y cada uno de ellos tiene un color diferente.</p>\n<h2 id="blink-y-blinkoff"><a href="#blink-y-blinkoff" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>blink()</code> y <code>blinkOff()</code></h2>\n<p>Esta función permite habilitar el parpadeo contínuo de un LED en específico, en donde el color se debe especificar en <em>hexadecimal</em>. Esta función opera de manera desatendida, es decir, que se puede dejar el LED en modo parpadeo de manera indefinida. No obstante, para apagar o eliminar el parpadeo del LED se usa la función <code>blinkOff()</code>.</p>\n<p>El siguiente ejemplo muestra como se podría utilizar esta función:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code><span class="token keyword">const</span> RGB <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'robotois-rgb-leds\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> rgb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RGB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nrgb<span class="token punctuation">.</span><span class="token function">blink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token string">`#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">16777215</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  rgb<span class="token punctuation">.</span><span class="token function">blinkOff</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  rgb<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="funciones-allon-y-alloff"><a href="#funciones-allon-y-alloff" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Funciones <code>allOn()</code> y <code>allOff()</code></h2>\n<p>Estas funciones nos sirven para establecer el estado de todos los LEDs que se encuentran en el módulo. Con <code>allOn()</code> se establece el color que mostrarán todos los LEDs, el color se debe especificar en <em>hexadecimal</em>. Por otro lado, la función <code>allOff()</code> se utiliza para apagar todos los LEDs de manera inmediata.</p>\n<p>Es importante notar que, aunque es posible obtener el mismo resultado usando las funciones <code>turnOn</code> y <code>turnOff</code>, las funciones <code>allOn</code> y <code>allOff</code> operan de manera diferente, ya que de manera interna se manda la instrucción para el IC del módulo de apagar todos o encender todos, sin tener que hacerlo un LED a la vez.</p>\n<p>En el siguiente ejemplo se muestra cómo podrían utilizarse estas funciones:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code><span class="token keyword">const</span> RGB <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'robotois-rgb-leds\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> rgb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RGB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nrgb<span class="token punctuation">.</span><span class="token function">allOn</span><span class="token punctuation">(</span><span class="token string">\'#cc3399\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  rgb<span class="token punctuation">.</span><span class="token function">allOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  rgb<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="alltoggle"><a href="#alltoggle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>allToggle()</code></h2>\n<p>Esta función permite encender y apagar todos los LEDs al mismo tiempo, es decir, que si los LEDs están encendidos éstos se apgarán, pero si los LEDs están apagados se encenderán. En este caso el color se especifica en formato <em>hexadecimal</em>. El siguiente ejemplo muestra como podría utilizarse esta función:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code><span class="token keyword">const</span> RGB <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../index\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> rgb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RGB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  rgb<span class="token punctuation">.</span><span class="token function">allToggle</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">16777215</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="funciones-allblink-y-allblinkoff"><a href="#funciones-allblink-y-allblinkoff" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Funciones <code>allBlink()</code> y <code>allBlinkOff()</code></h2>\n<p>Estas funciones, como se puede deducir, permiten establecer que todos los LEDs parpadeen y que se elimine dicho parpadeo. Como es natural, se debe especificar el color que tendrán los LEDs en formato <em>hexadecimal</em>. Para comprender de manera más práctica estas funciones, se muestra un ejemplo a continuación:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-javascript"><code><span class="token keyword">const</span> RGB <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'../index\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> rgb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RGB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nrgb<span class="token punctuation">.</span><span class="token function">allBlink</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">16777215</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  rgb<span class="token punctuation">.</span><span class="token function">allBlinkOff</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  rgb<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">8000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>El parpadeo de todos LEDs se puede dejar desatendido, es decir que puede ejecutarse de manera indefinida, y con la función <code>allBlinkOff()</code> se puede detener dicho parpadeo.</p>',
frontmatter:{title:"LEDs RGB",path:"/docs/rgb-leds.html"}}},pathContext:{}}}});
//# sourceMappingURL=path---docs-rgb-leds-html-e26d46cf7ce2f8d5f579.js.map