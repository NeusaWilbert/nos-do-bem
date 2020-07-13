import React from "react";

const Facebook = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div style={{ minWidth: "340px" }}>
      <div
        class="fb-page"
        data-href="https://www.facebook.com/nosdobem.protecaoanimal/"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/nosdobem.protecaoanimal/"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/nosdobem.protecaoanimal/">
            Nós do Bem
          </a>
        </blockquote>
      </div>
    </div>
  </div>
);

export default Facebook;
