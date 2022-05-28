import React from 'react';
import { render } from 'game-core-client';
import { times } from 'game-core-client/utils.js';
import Counter from 'game-core-client/components/Counter.js';
import './style.scss';

render({
  background: (
    <div className="table">
      <img id="map" src="images/germany.jpg"/>
      <span className="cost high" style={{left: 109, top: 140}}>19</span>
      <span className="cost high" style={{left: 143, top: 154}}>19</span>
      <span className="cost high" style={{left: 190, top: 173}}>18</span>
      <span className="cost" style={{left: 190, top: 102}}>15</span>
      <span className="cost" style={{left: 119, top: 211}}>6</span>
      <span className="cost" style={{left: 129, top: 249}}>6</span>
      <span className="cost" style={{left: 119, top: 211}}>6</span>
      <span className="cost" style={{left: 92, top: 286}}>4</span>
      <span className="cost" style={{left: 54, top: 322}}>4</span>
      <span className="cost" style={{left: 151, top: 270}}>8</span>
      <span className="cost" style={{left: 110, top: 310}}>8</span>
      <span className="cost" style={{left: 127, top: 287}}>6</span>
      <span className="cost" style={{left: 131, top: 346}}>11</span>
      <span className="cost" style={{left: 167, top: 339}}>11</span>
      <span className="cost" style={{left: 152, top: 371}}>8</span>
      <span className="cost high" style={{left: 201, top: 218}}>16</span>
      <span className="cost high" style={{left: 196, top: 263}}>19</span>
      <span className="cost high" style={{left: 193, top: 311}}>17</span>
      <span className="cost" style={{left: 253, top: 95}}>6</span>
      <span className="cost" style={{left: 252, top: 166}}>10</span>
      <span className="cost high" style={{left: 289, top: 154}}>17</span>
      <span className="cost high" style={{left: 301, top: 110}}>21</span>
      <span className="cost high" style={{left: 321, top: 70}}>16</span>
      <span className="cost" style={{left: 166, top: 392}}>11</span>
      <span className="cost" style={{left: 217, top: 387}}>11</span>
      <span className="cost" style={{left: 221, top: 341}}>10</span>
      <span className="cost" style={{left: 191, top: 414}}>14</span>
      <span className="cost" style={{left: 364, top: 215}}>6</span>
      <span className="cost" style={{left: 298, top: 201}}>11</span>
      <span className="cost" style={{left: 372, top: 126.5}}>13</span>
      <span className="cost" style={{left: 262, top: 260}}>15</span>
      <span className="cost high" style={{left: 250, top: 356}}>16</span>
      <span className="cost high" style={{left: 297, top: 375}}>20</span>
      <span className="cost" style={{left: 305, top: 324}}>15</span>
      <span className="cost high" style={{left: 317, top: 275}}>19</span>
      <span className="cost" style={{left: 274, top: 424}}>7</span>
      <span className="cost high" style={{left: 386, top: 154}}>19</span>
      <span className="cost high" style={{left: 453, top: 236}}>21</span>
      <span className="cost" style={{left: 407, top: 276}}>13</span>
      <span className="cost" style={{left: 371, top: 292}}>15</span>
      <span className="cost" style={{left: 313, top: 462}}>6</span>
      <span className="cost" style={{left: 322, top: 438}}>2</span>
      <span className="cost" style={{left: 338, top: 460}}>4</span>
      <span className="cost" style={{left: 348, top: 496}}>2</span>
      <span className="cost" style={{left: 369, top: 453}}>10</span>
      <span className="cost" style={{left: 406, top: 357}}>13</span>
      <span className="cost" style={{left: 481, top: 340}}>13</span>
      <span className="cost" style={{left: 396, top: 326}}>8</span>
      <span className="cost" style={{left: 447, top: 342}}>8</span>
      <span className="cost" style={{left: 465, top: 309}}>11</span>
      <span className="cost high" style={{left: 351, top: 387}}>18</span>
      <span className="cost high" style={{left: 396, top: 406}}>20</span>
      <span className="cost high" style={{left: 437, top: 440}}>21</span>
      <span className="cost high" style={{left: 488, top: 453}}>18</span>
      <span className="cost" style={{left: 387, top: 493}}>4</span>
      <span className="cost" style={{left: 395, top: 517}}>9</span>
      <span className="cost" style={{left: 415, top: 499}}>7</span>
      <span className="cost high" style={{left: 456, top: 513}}>19</span>
      <span className="cost high" style={{left: 447, top: 483}}>20</span>
      <span className="cost" style={{left: 509, top: 395}}>11</span>
      <span className="cost" style={{left: 553, top: 416}}>11</span>
      <span className="cost" style={{left: 533, top: 481}}>11</span>
      <span className="cost" style={{left: 523, top: 340}}>10</span>
      <span className="cost" style={{left: 516, top: 433}}>10</span>
      <span className="cost" style={{left: 555, top: 334}}>12</span>
      <span className="cost" style={{left: 520, top: 274}}>8</span>
      <span className="cost" style={{left: 553, top: 216}}>12</span>
      <span className="cost" style={{left: 601, top: 229}}>13</span>
      <span className="cost high" style={{left: 576, top: 246}}>18</span>
      <span className="cost high" style={{left: 559, top: 281}}>19</span>
      <span className="cost" style={{left: 575, top: 373}}>6</span>
      <span className="cost" style={{left: 616, top: 318}}>15</span>
      <span className="cost high" style={{left: 644, top: 361}}>16</span>
      <span className="cost high" style={{left: 627, top: 395}}>16</span>
      <span className="cost high" style={{left: 579, top: 410}}>17</span>
      <span className="cost high" style={{left: 658, top: 310}}>17</span>
      <span className="cost" style={{left: 675, top: 397}}>14</span>
      <span className="cost" style={{left: 646, top: 240}}>6</span>
      <span className="cost" style={{left: 619, top: 202}}>10</span>
      <span className="cost" style={{left: 596, top: 151}}>12</span>
      <span className="cost" style={{left: 639, top: 158}}>14</span>

      <span className="resource-cost" style={{left: 716, top: 498}}>1</span>
      <span className="resource-cost" style={{left: 716, top: 438}}>2</span>
      <span className="resource-cost" style={{left: 716, top: 378}}>3</span>
      <span className="resource-cost" style={{left: 716, top: 317}}>4</span>
      <span className="resource-cost" style={{left: 716, top: 255}}>5</span>
      <span className="resource-cost" style={{left: 716, top: 193}}>6</span>
      <span className="resource-cost" style={{left: 716, top: 133}}>7</span>
      <span className="resource-cost" style={{left: 716, top: 73}}>8</span>
      <span className="resource-cost" style={{left: 716, top: 48}}>10</span>
      <span className="resource-cost" style={{left: 716, top: 22}}>12</span>
      <span className="resource-cost" style={{left: 744, top: 48}}>14</span>
      <span className="resource-cost" style={{left: 744, top: 22}}>16</span>
    </div>
  ),
  
  pieces: {
    card: ({ id, image, children }) => ( // doc must indicate that children should be included at top level if piece needs to be able to hold other pieces
      <>
        <img src={`images/cards/${id ? image : 'plug.webp'}`} />
        {children}
      </>
    ),

    token: ({ player, color }) => <img src={`images/${color}-token.png`} player={player}/>,

    hammer: () => <img src="images/gavel.png"/>,

    resource: ({ type }) => {
      if (type === 'coal') return '▲';
      if (type === 'oil') return '■';
      if (type === 'garbage') return '■';
      if (type === 'uranium') return '●';
    },
  },
  components: {
  },
});
