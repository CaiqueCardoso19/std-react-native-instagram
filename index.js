/* eslint-disable import/no-named-as-default-member */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
// eslint-disable-next-line import/no-named-as-default
import App from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
