/**
 * @license ngyn
 * Copyright (c) 2012-2013 Configit A/S https://github.com/configit
 * License: MIT
 */
 
( function ( angular ) {
  'use strict';
  
  angular.module( 'cs.modules.config', [] ).value('cs.modules.config', {} );
  angular.module( 'cs.modules', ['cs.modules.config'] );

} )( window.angular );