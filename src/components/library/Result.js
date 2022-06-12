import React from 'react';
import PropTypes from 'prop-types';

export const Result = ({ result }) => (
    <li>
        {result.codeResult.code} [{result.codeResult.format}]
    </li>
);

Result.propTypes = {
    result: PropTypes.object
};

