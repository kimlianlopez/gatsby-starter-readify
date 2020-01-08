import React from 'react';
import PropTypes from 'prop-types';

const PreviewCompatibleContent = ({
  content,
  className,
  inEditor,
  ...props
}) => {
  if (!!inEditor) {
    return (
      <div className={className} {...props}>
        {content}
      </div>
    );
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
      {...props}
    />
  );
};

PreviewCompatibleContent.defaultProps = {
  inEditor: false
};

PreviewCompatibleContent.propTypes = {
  inEditor: PropTypes.bool,
  content: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default PreviewCompatibleContent;
