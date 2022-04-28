import React, {useState} from 'react';
import {
  elementByKey,
  branch,
} from './utils';

const hilite = xml => {
  const el = elementByKey(branch(xml));
  if (el) {
    el.classList.add('hilited');
  }
};

const unhilite = xml => {
  const el = elementByKey(branch(xml));
  if (el) {
    el.classList.remove('hilited');
  }
};

const DebugLine = ({xml, nest}) => {
  const [collapse, setCollapse] = useState(false);
  const children = !collapse && xml && xml.hasChildNodes();
  return xml && (
    <div>
      {'\u00A0'.repeat(nest * 3)}
      <span onClick={() => setCollapse(!collapse)}>
        {xml.hasChildNodes() && (collapse ? '▶' : '▼') || '\u00A0'}&nbsp;
        <span onMouseOver={() => hilite(xml)} onMouseLeave={() => unhilite(xml)}>
          &lt;<span className="node-name">{xml.nodeName}</span>
          {[...xml.attributes].map(({name, value}) => (
            <span key={name}>{' '}
              <span className="attr-name">{name}</span>
              =&quot;<span className="attr-value">{value}</span>&quot;
            </span>
          ))}
        {children ? '' : '/'}&gt;
        </span>
      </span>

      {children && Object.entries(xml.childNodes).map(([key, child]) => <DebugLine key={key} nest={nest + 1} xml={child}/>)}
      {children && (
        <span>
          {'\u00A0'.repeat(nest * 3 + 2)}
          &lt;<span className="node-name">{xml.nodeName}</span>/&gt;
        </span>
      )}
    </div>
  ) || null;
}

export default DebugLine;
