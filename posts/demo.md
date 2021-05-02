---
title: "Mis necesidades me llevaron a Next.js"
createdAt: "Abril 25, 2021"
time: "5 min"
---


Estoy sobre-pensando ¿cómo evolucionar mi carrera en el internet?, todos los años las herramientas sacan nuevas versiones y cada 2 años aproximadamente hay un cambio de paradigma. Mi creencia en esto fue que hace 2 años en el ecosistema del frontend la mayoría usaba a Gatsby como entorno de React para crear proyectos web, hoy ese puesto parece haberlo tomado Next.js. La razón de este cambio es que Next comenzó diferenciandoce con SSR y CSG, mientras que Gatsby se diferenció con SSG y CSG.  

&nbsp;   

Es difícil explicar la diferencia entre SSR, SSG y CSG entonces solo diré que CSG es cargar un proyecto web con un peso inicial superior al de una sola página web del mismo, pero el resto de la experiencia es más fluida y no tiene buen SEO. SSR es tener mejor SEO pero las páginas con SSR se arman en el servidor y en el cliente (navegador) entonces siempre tienen un tiempo extra de carga. Por último SSG es una forma de pre armar tu proyecto al subirlo a proveedor de hosting y este toma la responsabilidad de hacer los posibles llamados de fetch inicial a tus APIS y toda esa información de carga se vuelve parte estática de tu proyecto (dejando espacio para fetching con AJAX para las cosas que no se pueden prevenir sin la interacción del usuario), luego envían estas páginas HTML a su red de contenido que debería tener diferentes nodos alrededor del mundo. Tu página va a contar con buen SEO y está lista para ser consumida a una velocidad superior que la de un proyecto con SSR y CSG.

&nbsp;   

Ok saliendo de esta explicación verbosa, Next comenzó con SSR y CSG, pero luego alrededor de su versión 9 agregó SSG por default a todas las páginas que creas, dejando al dev optar por SSR cuando lo ocupes. Alrededor de este periodo necesitaba mejorar mis proyectos que solo estaba haciendo con Create React Application (proyectos de solo React) porque no le estaba ofreciendo un buen SEO a mis clientes y quise una opción que lo incluyera para poder encargarme solo del código del negocio. Me dejo llevar por por Tech Twitter sobre que utilizar la mayoría de las veces y todavía muchas personas estaban hablando de Gatsby, pero la comparación de ambos solo me dijo que Next es una herramienta más completa para mis necesidades. Hoy en día Next es del que se habla más seguido en Tech Twitter.

&nbsp;   

También voy a dar una lista de razones por las cuales prefiero Next a parte de lo antes dicho

&nbsp;   

- Tiene una excelente documentación
- useRouter como hook para manejar las rutas en el proyecto
- El equipo de trabajo de Vercel (empresa donde se originó y se mantiene el proyecto) tiene ingenieros de diferentes nacionalidades incluyendo Argentina y Venezolana.
- Optan por la mínima cantidad de abstracciones posibles, si las ocupan es porque es una API que ofrecen para código que solo va a ocurrir en Node y AWS por parte de ellos, pero el resto del proyecto funciona con las APIS de la web y React.
- Tienen un componente para imagen que optimiza su formato a WebP.
- Están trabajando en conjunto con el core team de React para agregar los Server Components, que a su vez deberían de estar colaborando o aprendiendo de manera reciproca cómo va a funcionar el modo concurrente y suspense.

En conclusión

Puedo decir que mi experiencia con Next ha sido agradable, admiro a Vercel como empresa y estoy contento del éxito que tienen, pues resuelven muchas de las necesidades que tengo como desarrollador para entregar un código formidable a mis clientes en el ambiente que me siento más cómodo, React.
