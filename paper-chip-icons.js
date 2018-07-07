import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<iron-iconset-svg name="paper-chip-icons" size="24">
  <svg>
    <defs>
      <g id="cancel">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
        <path d="M0 0h24v24H0z" fill="none"></path>
      </g>
      <g id="avatar"><path fill="#B388FF" d="M0 0h128v128h-128z"></path><path fill="#1C3AA9" d="M70.5 128h12.4c-5.1-15.8-6.6-23.9-7.2-28.4-1.9 8.8-4 19.3-5.2 28.4z"></path><path d="M92.9 32.8l-.2.1c.1 0 .2 0 .2-.1zM91.7 33.3l-.7.1.7-.1zM92.3 33.1l-.3.1.3-.1zM40.3 33.4c-.2 0-.5 0-.7-.1.3 0 .5.1.7.1zM39.4 33.2l-.5-.1.5.1zM38.7 33c-.2-.1-.4-.2-.5-.3.1.1.3.2.5.3z" fill="none"></path><path fill="#2A56C6" d="M82.9 90.8v.2-.2z"></path><path fill="#FFE0B2" d="M31.2 47.2zM45.8 93c5.8 5.5 13.6 9.1 22.3 9.3 2.8-.1 5.4-.5 8-1.2l.8-3.8c4.3-19.3 9.7-37.4 15-52.9h6.9l-4.8-8.2c-.2-1.2-.4-2.5-.7-3.6l-.4.3-.2.1-.4.2-.3.1-.3.1-.7.1h-50.7c-.2 0-.5 0-.7-.1-.1 0-.1 0-.2-.1l-.5-.1-.2-.1c-.2-.1-.4-.2-.5-.3 0 0-.1 0-.1-.1-.1.2-.1.4-.1.7-1-.3-2-.4-3-.3-4.1.6-6.9 4.7-6.3 9.1.3 2 1.2 3.8 2.6 5 .3.1 1.6.7 3.4 1.7.8.4 1.6 1 2.5 1.6 1.5 1.1 3.2 2.5 4.9 4.1 0 0 16.3 12.3 3.4 38 .1.2.2.3.3.4zm34.1-51.9c.8 0 1.5.7 1.5 1.6 0 .9-.7 1.6-1.5 1.6s-1.5-.7-1.5-1.6.6-1.6 1.5-1.6z"></path><path fill="#2A56C6" d="M68.1 102.3c-8.7-.2-16.5-3.8-22.3-9.3-.1-.1-.2-.2-.4-.3-3-.2-7.6.2-10.8.6-4.6.6-9.6 1.3-15 2.4-3.6.7-8.1 1.9-19.7 5.3v27h71.4c1.3-9.1 2.9-18.1 4.7-26.9-2.5.7-5.1 1.1-7.9 1.2z"></path><path fill="#6D4C41" d="M61.8 9.8c-7.3 1.1-13.6 5.1-17.9 10.8h43.7c-6.1-7.9-15.7-12.3-25.8-10.8z"></path><path fill="#E65100" d="M38.7 33l.2.1c.2.1.3.1.5.1.1 0 .1 0 .2.1l.7.1h50.7c.2 0 .5 0 .7-.1l.3-.1.3-.1c.1 0 .3-.1.4-.2l.2-.1.4-.3c1-.7 1.6-1.9 1.6-3.2v-4.8c0-2.2-1.8-4-4-4h-50.5c-2.2 0-4 1.8-4 4v4.8c0 1.4.7 2.6 1.8 3.3 0 0 .1 0 .1.1s.2.2.4.3z"></path><ellipse fill="#444" cx="79.9" cy="42.7" rx="2" ry="2.2"></ellipse></g>
    </defs>
  </svg>
</iron-iconset-svg><iron-iconset-svg name="paper-chip-avatars" size="128">
  <svg>
    <defs>
      <g id="avatar"><path fill="#B388FF" d="M0 0h128v128h-128z"></path><path fill="#1C3AA9" d="M70.5 128h12.4c-5.1-15.8-6.6-23.9-7.2-28.4-1.9 8.8-4 19.3-5.2 28.4z"></path><path d="M92.9 32.8l-.2.1c.1 0 .2 0 .2-.1zM91.7 33.3l-.7.1.7-.1zM92.3 33.1l-.3.1.3-.1zM40.3 33.4c-.2 0-.5 0-.7-.1.3 0 .5.1.7.1zM39.4 33.2l-.5-.1.5.1zM38.7 33c-.2-.1-.4-.2-.5-.3.1.1.3.2.5.3z" fill="none"></path><path fill="#2A56C6" d="M82.9 90.8v.2-.2z"></path><path fill="#FFE0B2" d="M31.2 47.2zM45.8 93c5.8 5.5 13.6 9.1 22.3 9.3 2.8-.1 5.4-.5 8-1.2l.8-3.8c4.3-19.3 9.7-37.4 15-52.9h6.9l-4.8-8.2c-.2-1.2-.4-2.5-.7-3.6l-.4.3-.2.1-.4.2-.3.1-.3.1-.7.1h-50.7c-.2 0-.5 0-.7-.1-.1 0-.1 0-.2-.1l-.5-.1-.2-.1c-.2-.1-.4-.2-.5-.3 0 0-.1 0-.1-.1-.1.2-.1.4-.1.7-1-.3-2-.4-3-.3-4.1.6-6.9 4.7-6.3 9.1.3 2 1.2 3.8 2.6 5 .3.1 1.6.7 3.4 1.7.8.4 1.6 1 2.5 1.6 1.5 1.1 3.2 2.5 4.9 4.1 0 0 16.3 12.3 3.4 38 .1.2.2.3.3.4zm34.1-51.9c.8 0 1.5.7 1.5 1.6 0 .9-.7 1.6-1.5 1.6s-1.5-.7-1.5-1.6.6-1.6 1.5-1.6z"></path><path fill="#2A56C6" d="M68.1 102.3c-8.7-.2-16.5-3.8-22.3-9.3-.1-.1-.2-.2-.4-.3-3-.2-7.6.2-10.8.6-4.6.6-9.6 1.3-15 2.4-3.6.7-8.1 1.9-19.7 5.3v27h71.4c1.3-9.1 2.9-18.1 4.7-26.9-2.5.7-5.1 1.1-7.9 1.2z"></path><path fill="#6D4C41" d="M61.8 9.8c-7.3 1.1-13.6 5.1-17.9 10.8h43.7c-6.1-7.9-15.7-12.3-25.8-10.8z"></path><path fill="#E65100" d="M38.7 33l.2.1c.2.1.3.1.5.1.1 0 .1 0 .2.1l.7.1h50.7c.2 0 .5 0 .7-.1l.3-.1.3-.1c.1 0 .3-.1.4-.2l.2-.1.4-.3c1-.7 1.6-1.9 1.6-3.2v-4.8c0-2.2-1.8-4-4-4h-50.5c-2.2 0-4 1.8-4 4v4.8c0 1.4.7 2.6 1.8 3.3 0 0 .1 0 .1.1s.2.2.4.3z"></path><ellipse fill="#444" cx="79.9" cy="42.7" rx="2" ry="2.2"></ellipse></g>
    </defs>
  </svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);
