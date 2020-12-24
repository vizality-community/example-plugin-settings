import React, { Component } from 'react';

import { TextInput, SwitchItem, Category, RadioGroup, SelectInput, ColorPickerInput, CopyInput, TextArea, RegionSelector, SliderInput, PermissionOverrideItem, Checkbox } from '@vizality/components/settings';
import { getModule, getModuleByDisplayName } from '@vizality/webpack';

export default class Settings extends Component {
  constructor (props) {
    super(props);
    this.Flex = getModuleByDisplayName('Flex');
    this.classes = {
      flexClassName: `${this.Flex.Direction.HORIZONTAL} ${this.Flex.Justify.START} ${this.Flex.Align.STRETCH} ${this.Flex.Wrap.NO_WRAP}`,
      alignCenter: getModule('alignCenter')
    };
  }

  render () {
    const { getSetting, updateSetting, toggleSetting } = this.props;
    const { classes } = this;

    return (
      <>
        <Category
          name={'Example Category Item'}
          description={'This is an example category item.'}
          opened={getSetting('example-category-item', false)}
          onChange={() => toggleSetting('example-category-item')}
        >
          <SwitchItem
            note='This is an example of a disabled switch item.'
            value={getSetting('example-disabled-switch-item', true)}
            disabled
            onChange={() => toggleSetting('example-disabled-switch-item')}
          >
            Disabled Switch Item
          </SwitchItem>
          <TextInput
            note='This is an example of a simple text input.'
            defaultValue={getSetting('example-text-input', 'Example Input Text')}
            required={false}
            disabled={!getSetting('example-disabled-switch-item', true)}
            onChange={val => updateSetting('example-text-input', val)}
          >
            Example Text Input
          </TextInput>
        </Category>
        <RadioGroup
          required={false}
          onChange={val => updateSetting('example-radio-group', val.value)}
          value={getSetting('example-radio-group', 'radio-item-2')}
          options={[
            {
              name: 'Radio Button Item 1',
              value: 'radio-item-1'
            },
            {
              name: 'Radio Button Item 2',
              value: 'radio-item-2',
              desc: 'Radio button item description.'
            },
            {
              name: 'Radio Button Item 3',
              value: 'radio-item-3'
            }
          ]}
        >
          Example Radio Button Group
        </RadioGroup>
        <SwitchItem
          note='This is an example of a switch item.'
          value={getSetting('example-switch-item', false)}
          onChange={() => toggleSetting('example-switch-item')}
        >
          Example Switch Item
        </SwitchItem>
        <SelectInput
          note={'This is an example of a select input.'}
          value={getSetting('example-select-input')}
          options={[
            {
              value: 'option-1',
              label: 'Option 1'
            },
            {
              value: 'option-2',
              label: 'Option 2'
            },
            {
              value: 'option-3',
              label: 'Option 3'
            },
            {
              value: 'option-4',
              label: 'Option 4'
            }
          ]}
          onChange={res => updateSetting('example-select-input', res.value)}
        >
          Example Select Input
        </SelectInput>
        <ColorPickerInput
          defaultColors={[
            1752220,
            3066993,
            3447003,
            10181046,
            15277667,
            15844367,
            15105570,
            15158332,
            9807270,
            6323595,
            1146986,
            2067276,
            2123412,
            7419530,
            11342935,
            12745742,
            11027200,
            10038562,
            9936031,
            533306
          ]}
          def={10070709}
          value={getSetting('example-color-input', 10070709)}
          onChange={res => updateSetting('example-color-input', res)}
        >
          Example Color Picker
        </ColorPickerInput>
        <div className='example-color-input-box'
          style={{
            height: 50,
            width: 50,
            marginBottom: 20,
            borderRadius: 1000,
            backgroundColor: getModule('int2hex', 'getDarkness', 'isValidHex').int2hex(getSetting('example-color-input'))
          }}>
        </div>
        <CopyInput value={'Some text to be copied'}>
          Example Copy Input Item
        </CopyInput>
        <TextArea
          autofocus={false}
          autosize={false}
          disabled={false}
          flex={false}
          maxLength={120}
          name={''}
          onChange={val => {
            updateSetting('example-textarea', val);
            val -= getSetting('example-textarea').length;
          }}
          placeholder={'The best placeholder you ever saw'}
          resizeable={false}
          rows={3}
          value={getSetting('example-textarea')}
        >
          Example Textarea Input
        </TextArea>
        <div className={classes.flexClassName}>
          <div className={getModule('flexChild').flexChild} style={{ flex: '1 1 50%' }}>
            <SelectInput
              note={'This shows you how to have 2 side-by-side select inputs.'}
              value={getSetting('example-half-select')}
              options={[
                {
                  value: 'option-1',
                  label: 'Option 1'
                },
                {
                  value: 'option-2',
                  label: 'Option 2'
                },
                {
                  value: 'option-3',
                  label: 'Option 3'
                },
                {
                  value: 'option-4',
                  label: 'Option 4'
                }
              ]}
              onChange={res => updateSetting('example-half-select', res.value)}
            >
              Select Input
            </SelectInput>
          </div>
          <div className={getModule('flexChild').flexChild} style={{ flex: '1 1 50%' }}>
            <SelectInput
              note={'This shows you how to have 2 side-by-side select inputs.'}
              value={getSetting('example-half-select-2')}
              options={[
                {
                  value: 'option-1',
                  label: 'Option 1'
                },
                {
                  value: 'option-2',
                  label: 'Option 2'
                },
                {
                  value: 'option-3',
                  label: 'Option 3'
                },
                {
                  value: 'option-4',
                  label: 'Option 4'
                }
              ]}
              onChange={res => updateSetting('example-half-select-2', res.value)}
            >
              Select Input
            </SelectInput>
          </div>
        </div>
        <SliderInput
          disabled={false}
          note={'This is an example slider input.'}
          initialValue={15}
          defaultValue={getSetting('example-slider', 10)}
          onChange={v => updateSetting('example-slider', v)}
        >
          Slider Input
        </SliderInput>
        <SliderInput
          disabled={false}
          note={'This is an example slider input with markers.'}
          stickToMarkers
          initialValue={15}
          markers={[ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 26 ]}
          onMarkerRender={s => `${s}px`}
          defaultValue={getSetting('example-slider-markers', 15)}
          onChange={v => updateSetting('example-slider-markers', v)}
        >
          Slider Input with Markers
        </SliderInput>
        <Checkbox
          align={classes.alignCenter}
          color={'#7289da'}
          disabled={false}
          onChange={() => toggleSetting('example-checkbox')}
          readOnly={false}
          reverse={false}
          // shape={'box-mmYMsp'}
          size={24}
          type={'inverted'}
          value={getSetting('example-checkbox')}
        >
          Just a simple checkbox.
        </Checkbox>
        {/* <RegionSelector
          disabled={false}
          error={false}
          onClick={ret => {
            // console.log(ret);
            getModule('RegionSelectModal')({
              onChange (...args) {
                // console.log(args);
              }
            });
          }}
          region={{
            custom: false,
            deprecated: false,
            id: 'us-south',
            name: 'US South',
            optimal: true,
            vip: false
          }}
        >
          Just a simple region selector.
        </RegionSelector> */}
        {/* <PermissionOverrideItem
          disabled={false}
          hideBorder={false} // divider
          note={'Members with this permission can change the channel\'s name or delete it.'}
          onChange={''}
          value={'ALLOW'} // 'DENY', 'ALLOW', 'PASSTHROUGH'
        >
          Just a simple permission override item.
        </PermissionOverrideItem> */}
      </>
    );
  }
}
