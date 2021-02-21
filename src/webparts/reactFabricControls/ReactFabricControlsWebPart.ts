import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactFabricControlsWebPartStrings';
import ReactFabricControls from './components/ReactFabricControls';
import { IReactFabricControlsProps } from './components/IReactFabricControlsProps';

export interface IReactFabricControlsWebPartProps {
  description: string;
}

export default class ReactFabricControlsWebPart extends BaseClientSideWebPart<IReactFabricControlsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReactFabricControlsProps > = React.createElement(
      ReactFabricControls,
      {
        description: this.properties.description,
        buttonText:"Click me"
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('2.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
