import * as React from 'react';
import styles from './ReactFabricControls.module.scss';
import { IReactFabricControlsProps } from './IReactFabricControlsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { IButtonProps, DefaultButton } from 'office-ui-fabric-react/lib/Button'; 
import {IComponentState} from './IComponentState';
import {Stack,IStackTokens} from 'office-ui-fabric-react/lib/Stack';
import {Channel,IchannellistProps} from './Channel';
import {Ichannel} from './Ichannel';


const stacktokes:IStackTokens={childrenGap:15};

export default class ReactFabricControls extends React.Component<IReactFabricControlsProps,IComponentState, {}> {
  private _channels:Ichannel[]=[
    {ID:1,ChannelCode:"ABN",ChannelName:"AndhraJyoti",ChannelOwner:"RadhaKrishna"},
    {ID:2,ChannelCode:"TV9",ChannelName:"TV9",ChannelOwner:"Rameswara Rao"},
    {ID:3,ChannelCode:"TV5",ChannelName:"TV5",ChannelOwner:"Koteswar"},
    {ID:4,ChannelCode:"Sakshi",ChannelName:"Sakshi",ChannelOwner:"YS Jagan"},
  ];
  constructor(props:IReactFabricControlsProps,state:IComponentState)
  {
    super(props);
    this.state=({userName:'',buttonDisabled: false});
    this._greetClicked = this._greetClicked.bind(this);
  }
  public render(): React.ReactElement<IReactFabricControlsProps> {
    return (
      
      <Stack horizontal wrap tokens={stacktokes} >
      <div className={ styles.reactFabricControls }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
            </div>
          </div>
          <div className={ styles.row }>
          <Channel channel={this._channels}></Channel>
          <TextField required={true} name="txtUserName" placeholder="Your name place!" value={this.state.userName} onChanged={e => this.setState({ userName: e })} ></TextField>
          </div>
              
              
              <div className={ styles.row }>

              <DefaultButton  
                  data-automation-id="greet"  
                  target="_blank"  
                  title="Greet the user!"  
                  onClick={this._greetClicked}  
                  >  
                  Greet  
                </DefaultButton>
              </div>
              <div className={ styles.row }>
              <p className={ styles.description }>{this.state.userName}</p> 
              </div >

              <div className={ styles.row }>
              this.props.buttonText ?<button disabled={this.state.buttonDisabled}>{this.props.buttonText}</button> : null
              </div>
          
        </div>
      </div>
      </Stack>
    );

  }
  private _greetClicked(): void {  
    alert('Hello '+ this.state.userName);
  }
}
