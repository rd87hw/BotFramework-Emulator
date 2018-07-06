//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.
//
// Microsoft Bot Framework: http://botframework.com
//
// Bot Framework Emulator Github:
// https://github.com/Microsoft/BotFramwork-Emulator
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

import * as React from 'react';
import { Notification as NotificationType } from '@bfemulator/app-shared';
import { css } from 'glamor';
import { connect } from 'react-redux';
import * as NotificationActions from '../../../../data/action/notificationActions';

const CSS = css({
  position: 'relative',
  backgroundColor: 'slategray',

  '& > .close-icon': {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '32px',
    width: '32px',
    cursor: 'pointer',
    color: 'black'
  }
});

export interface NotificationProps {
  notification?: NotificationType;
  removeNotification?: (id: string) => void;
}

class NotificationComp extends React.Component<NotificationProps, {}> {
  constructor(props: NotificationProps) {
    super(props);
  }

  render(): JSX.Element {
    const { title = '', message = '', timestamp = 123456784, id = '' } = this.props.notification;
    const { removeNotification } = this.props;

    return (
      <li { ...CSS }>
        <div className="close-icon" onClick={ () => removeNotification(id) }>X</div>
        <h3>{ title }</h3>
        <p>{ message }</p>
        <span>{ timestamp }</span>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch): NotificationProps => ({
  removeNotification: (id: string) => { dispatch(NotificationActions.remove(id)); }
});

const mapStateToProps = () => ({});

export const Notification = connect(mapStateToProps, mapDispatchToProps)(NotificationComp);
