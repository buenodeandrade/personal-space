import React, { useState } from 'react';

function Browser() {
  const [url, setUrl] = useState('');
  const [iframeUrl, setIframeUrl] = useState('');

  const loadUrl = () => {
    setIframeUrl(url);
  };

  return (
    <div className="browser">
      <h3>Browser</h3>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter a URL"
      />
      <button onClick={loadUrl}>Go</button>
      {iframeUrl && (
        <iframe
          src={iframeUrl}
          width="100%"
          height="500px"
          title="Browser"
          style={{ border: 'none' }}
        ></iframe>
      )}
    </div>
  );
}

export default Browser;
