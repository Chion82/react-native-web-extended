/* eslint-disable */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PointPropType
 * @flow
 */
'use strict';

var PropTypes = require('react').PropTypes;

var PointPropType = process.env.NODE_ENV !== 'production' ? require('./createStrictShapeTypeChecker')({
  x: PropTypes.number,
  y: PropTypes.number,
}) : function () {};

module.exports = PointPropType;
