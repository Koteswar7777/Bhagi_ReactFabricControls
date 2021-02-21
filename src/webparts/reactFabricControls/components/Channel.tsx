import * as React from 'react';
import styles from './ReactFabricControls.module.scss';
import {Dropdown,IDropdownOption,DropdownMenuItemType} from 'office-ui-fabric-react/lib/Dropdown';
import {Stack,IStackTokens} from 'office-ui-fabric-react/lib/Stack';
import {Ichannel} from './Ichannel';
export interface IchannellistProps
{  
    channel:Ichannel[];

}

const options: IDropdownOption[] = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
  ];

  const stacktokens:IStackTokens={childrenGap:15};

  const stacktokens1:IStackTokens={childrenGap:20};

export class Channel extends React.Component<IchannellistProps,{}>
{

  public render():React.ReactElement<IchannellistProps>
  {
   return(
     <Stack tokens={stacktokens} >
    <div>  
     <ul>
          { 
            this.props.channel.map(channelItem=>
                <li>{channelItem.ID} - {channelItem.ChannelCode} - {channelItem.ChannelName} - {channelItem.ChannelOwner }</li> 
                
                )
          }
     </ul>
            <Stack tokens={stacktokens1}>
     <Dropdown
                placeholder="Select an option"
                label="Basic uncontrolled example"
                options={options}
                
              />
           </Stack>
     </div>
     </Stack>
     );


  }

}