// Link.react.test.js
import React from 'react';
import { CheckBox } from '../src/components/CheckBox/Checkbox';
import renderer from 'react-test-renderer'; 

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <CheckBox id="1" handleCheckChieldElement="" isChecked="" value=""/> 
  );
  let tree = component.toJSON();
});