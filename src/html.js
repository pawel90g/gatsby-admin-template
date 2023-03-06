import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `(function() {
              window._uxa = window._uxa || [];
              if (typeof CS_CONF === 'undefined') {
                window._uxa.push(['setPath', window.location.pathname + window.location.hash.replace('#', '?__')]);
                var mt = document.createElement("script");
                mt.type = "text/javascript";
                mt.async = true;
                mt.src = "//t.contentsquare.net/uxa/YOUR_TAG_ID.js";
                document.getElementsByTagName("head")[0].appendChild(mt);
              } else {
                window._uxa.push(['trackPageview', window.location.pathname + window.location.hash.replace('#', '?__')]);
              }
            })();`,
          }} />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
