
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/LabPageTest/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/LabPageTest/home",
    "route": "/LabPageTest"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6JUJF7C2.js"
    ],
    "route": "/LabPageTest/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AFKIPJEQ.js"
    ],
    "route": "/LabPageTest/team"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KGKKPOBZ.js"
    ],
    "route": "/LabPageTest/professor"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XDM6LMTG.js"
    ],
    "route": "/LabPageTest/research"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5YM423MO.js"
    ],
    "route": "/LabPageTest/research/nstc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5CHLPEK.js"
    ],
    "route": "/LabPageTest/research/collab"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ISJ2OSAT.js"
    ],
    "route": "/LabPageTest/research/publication"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7102, hash: 'c54169e83390c3f9e212e7fe062d56018735fc071a1b3846f579aa7ea072c4a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1339, hash: 'd607df82c1b0e6fb0a3a6833d6023f9ff53eaaaf6dfb93d27ab4a19a676603c3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'research/collab/index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/research_collab_index_html.mjs').then(m => m.default)},
    'professor/index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/professor_index_html.mjs').then(m => m.default)},
    'research/nstc/index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/research_nstc_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'research/publication/index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/research_publication_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'research/index.html': {size: 0, hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', text: () => import('./assets-chunks/research_index_html.mjs').then(m => m.default)},
    'styles-TKR5ZBNA.css': {size: 245308, hash: 'x5JdbPBq0jo', text: () => import('./assets-chunks/styles-TKR5ZBNA_css.mjs').then(m => m.default)}
  },
};
