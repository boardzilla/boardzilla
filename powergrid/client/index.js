import React from 'react';
import { render } from 'game-core-client';
import './style.scss';
import assets from './assets.json';

render({
  background: (
    <div className="table">
    </div>
  ),
  
  pieces: {
    Card: ({ id, image, children }) => ( // doc must indicate that children should be included at top level if piece needs to be able to hold other pieces
      <>
        <img title={image} src={assets[`cards/${id ? image : 'plug.webp'}`]} />
        {children}
      </>
    ),

    Building: ({ player, color }) => <img src={assets[`${color}-token.png`]} player={player}/>,

    Hammer: () => <img src={assets['gavel.png']}/>,

    Resource: ({ type }) => {
      if (type === 'coal') return '▲';
      if (type === 'oil') return '■';
      if (type === 'garbage') return '■';
      return '●';
    },
  },
  spaces: {
    '#map': ({ children }) => (
      <>
        <img id="map" src={assets['germany.jpg']} />
        <span className="cost high" style={{left: 104, top: 126}}>19</span>
        <span className="cost high" style={{left: 140, top: 141}}>19</span>
        <span className="cost high" style={{left: 188, top: 161}}>18</span>
        <span className="cost" style={{left: 190, top: 87}}>15</span>
        <span className="cost" style={{left: 114, top: 200}}>6</span>
        <span className="cost" style={{left: 124, top: 238}}>6</span>
        <span className="cost" style={{left: 84, top: 277}}>4</span>
        <span className="cost" style={{left: 45, top: 314}}>4</span>
        <span className="cost" style={{left: 147, top: 261}}>8</span>
        <span className="cost" style={{left: 102, top: 302}}>8</span>
        <span className="cost" style={{left: 120, top: 279}}>6</span>
        <span className="cost" style={{left: 126, top: 339}}>11</span>
        <span className="cost" style={{left: 164, top: 332}}>11</span>
        <span className="cost" style={{left: 146, top: 365}}>8</span>
        <span className="cost high" style={{left: 201, top: 208}}>16</span>
        <span className="cost high" style={{left: 194, top: 255}}>19</span>
        <span className="cost high" style={{left: 192, top: 303}}>17</span>
        <span className="cost" style={{left: 252, top: 80}}>6</span>
        <span className="cost" style={{left: 253, top: 153}}>10</span>
        <span className="cost high" style={{left: 291, top: 141}}>17</span>
        <span className="cost high" style={{left: 304, top: 96}}>21</span>
        <span className="cost high" style={{left: 324, top: 55}}>16</span>
        <span className="cost" style={{left: 162, top: 387}}>11</span>
        <span className="cost" style={{left: 216, top: 382}}>11</span>
        <span className="cost" style={{left: 220, top: 334}}>10</span>
        <span className="cost" style={{left: 189, top: 410}}>14</span>
        <span className="cost" style={{left: 366, top: 204}}>6</span>
        <span className="cost" style={{left: 301, top: 189}}>11</span>
        <span className="cost" style={{left: 377, top: 113.5}}>13</span>
        <span className="cost" style={{left: 264, top: 250}}>15</span>
        <span className="cost high" style={{left: 251, top: 351}}>16</span>
        <span className="cost high" style={{left: 299, top: 369}}>20</span>
        <span className="cost" style={{left: 308, top: 316}}>15</span>
        <span className="cost high" style={{left: 320, top: 265}}>19</span>
        <span className="cost" style={{left: 274, top: 419}}>7</span>
        <span className="cost high" style={{left: 392, top: 142}}>19</span>
        <span className="cost high" style={{left: 461, top: 226}}>21</span>
        <span className="cost" style={{left: 413, top: 267}}>13</span>
        <span className="cost" style={{left: 375, top: 283}}>15</span>
        <span className="cost" style={{left: 313, top: 459}}>6</span>
        <span className="cost" style={{left: 323, top: 435}}>2</span>
        <span className="cost" style={{left: 339, top: 457}}>4</span>
        <span className="cost" style={{left: 350, top: 494}}>2</span>
        <span className="cost" style={{left: 373, top: 449}}>10</span>
        <span className="cost" style={{left: 411, top: 350}}>13</span>
        <span className="cost" style={{left: 488, top: 333}}>13</span>
        <span className="cost" style={{left: 400, top: 318}}>8</span>
        <span className="cost" style={{left: 452, top: 334}}>8</span>
        <span className="cost" style={{left: 472, top: 301}}>11</span>
        <span className="cost high" style={{left: 355, top: 382}}>18</span>
        <span className="cost high" style={{left: 400, top: 400}}>20</span>
        <span className="cost high" style={{left: 444, top: 435}}>21</span>
        <span className="cost high" style={{left: 495, top: 449}}>18</span>
        <span className="cost" style={{left: 390, top: 489}}>4</span>
        <span className="cost" style={{left: 398, top: 515}}>9</span>
        <span className="cost" style={{left: 419, top: 497}}>7</span>
        <span className="cost high" style={{left: 463, top: 512}}>19</span>
        <span className="cost high" style={{left: 452, top: 481}}>20</span>
        <span className="cost" style={{left: 518, top: 389}}>11</span>
        <span className="cost" style={{left: 563, top: 411}}>11</span>
        <span className="cost" style={{left: 542, top: 478}}>11</span>
        <span className="cost" style={{left: 532, top: 332}}>10</span>
        <span className="cost" style={{left: 524, top: 429}}>10</span>
        <span className="cost" style={{left: 564, top: 326}}>12</span>
        <span className="cost" style={{left: 527, top: 266}}>8</span>
        <span className="cost" style={{left: 563, top: 205}}>12</span>
        <span className="cost" style={{left: 612, top: 219}}>13</span>
        <span className="cost high" style={{left: 586, top: 236}}>18</span>
        <span className="cost high" style={{left: 569, top: 272}}>19</span>
        <span className="cost" style={{left: 584, top: 366}}>6</span>
        <span className="cost" style={{left: 627, top: 309}}>15</span>
        <span className="cost high" style={{left: 656, top: 354}}>16</span>
        <span className="cost high" style={{left: 639, top: 389}}>16</span>
        <span className="cost high" style={{left: 589, top: 405}}>17</span>
        <span className="cost high" style={{left: 670, top: 301}}>17</span>
        <span className="cost" style={{left: 688, top: 390}}>14</span>
        <span className="cost" style={{left: 656, top: 231}}>6</span>
        <span className="cost" style={{left: 630, top: 191}}>10</span>
        <span className="cost" style={{left: 608, top: 139}}>12</span>
        <span className="cost" style={{left: 651, top: 146}}>14</span>

        <span className="resource-cost" style={{left: 731, top: 496}}>1</span>
        <span className="resource-cost" style={{left: 731, top: 436}}>2</span>
        <span className="resource-cost" style={{left: 731, top: 374}}>3</span>
        <span className="resource-cost" style={{left: 731, top: 311}}>4</span>
        <span className="resource-cost" style={{left: 731, top: 249}}>5</span>
        <span className="resource-cost" style={{left: 731, top: 186}}>6</span>
        <span className="resource-cost" style={{left: 731, top: 124}}>7</span>
        <span className="resource-cost" style={{left: 731, top: 62}}>8</span>
        <span className="resource-cost" style={{left: 731, top: 36}}>10</span>
        <span className="resource-cost" style={{left: 731, top: 9}}>12</span>
        <span className="resource-cost" style={{left: 759, top: 36}}>14</span>
        <span className="resource-cost" style={{left: 759, top: 9}}>16</span>
        {children}
      </>
    ),
  },
  components: {
  },
});
