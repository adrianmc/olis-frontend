import React from 'react';

import HeaderMenu from './HeaderMenu';
import HeaderNewConversation from './HeaderNewConversation';
import HeaderSearch from './HeaderSearch';
import HeaderNotifications from './HeaderNotifications';

import ConversationItem from './ConversationItem';

export default class Sidebar extends React.Component {

  render() {
    return (
      <div id="sidebar-container">
        <div id="sidebar-header">
          <HeaderMenu />
          <HeaderNewConversation />
          <HeaderSearch />
          <HeaderNotifications />
        </div>

        {/* Conversation List */}
        <div id="conversation-list">
          <ConversationItem
              title='Chat Title'
              timeString='34 minutes ago'
              previewText="Today's meeting minutes has been summarized into the notes on the side of this conversation."
              avatarSrc='http://www.placecage.com/200/200'
              unread={true}
              unreadCount={12}
          />
          <ConversationItem
              title='Christmas Party'
              timeString='2 hours ago'
              previewText="Does anyone know where we are going to meet? Please put it in the notes for this conversation."
              avatarSrc='http://www.placecage.com/200/201'
              unread={true}
              unreadCount={2}
          />
          <ConversationItem
              title='Q4 Sales Report'
              timeString='Yesterday'
              previewText="This was a very difficult report, we're going to need all hands on deck for this one."
              avatarSrc='http://www.placecage.com/201/200'
              active
          />
          <ConversationItem
              title='Maintenance Work This Weekend'
              timeString='2 days ago'
              previewText="Make sure not to get locked in if you're working over time!"
              avatarSrc='http://www.placecage.com/199/200'
          />
          <ConversationItem
              title='Lunch?'
              timeString='3 days ago'
              previewText="Anyone up for lunch?"
              avatarSrc='http://www.placecage.com/199/198'
          />
          <ConversationItem
              title='Need water!'
              timeString='5 days ago'
              previewText="Water cooler's running low, can someone fetch Emma to make the order?"
              avatarSrc='http://www.placecage.com/201/198'
          />
          <ConversationItem
              title='New Hire: Bill'
              timeString='last week'
              previewText="Everyone let's welcome Mr. Murray!"
              avatarSrc='http://www.fillmurray.com/200/200'
          />
          <ConversationItem
              title='Stephen: Please keep quiet'
              timeString='last week'
              previewText="It's getting too noisy in here!"
              avatarSrc='http://www.fillmurray.com/210/209'
          />
          <ConversationItem
              title='Chat Title'
              timeString='last week'
              previewText="Today's meeting minutes has been summarized into the notes on the side of this conversation."
              avatarSrc='http://www.placecage.com/200/205'
              unread={true}
              unreadCount={12}
          />
          <ConversationItem
              title='Christmas Party'
              timeString='last week'
              previewText="Does anyone know where we are going to meet? Please put it in the notes for this conversation."
              avatarSrc='http://www.placecage.com/200/201'
              unread={true}
              unreadCount={2}
          />
          <ConversationItem
              title='Q4 Sales Report'
              timeString='last week'
              previewText="This was a very difficult report, we're going to need all hands on deck for this one."
              avatarSrc='http://www.placecage.com/201/200'
          />
          <ConversationItem
              title='Maintenance Work This Weekend'
              timeString='last week'
              previewText="Make sure not to get locked in if you're working over time!"
              avatarSrc='http://www.placecage.com/199/200'
          />
          <ConversationItem
              title='Lunch?'
              timeString='last week'
              previewText="Anyone up for lunch?"
              avatarSrc='http://www.placecage.com/199/198'
          />
          <ConversationItem
              title='Need water!'
              timeString='last week'
              previewText="Water cooler's running low, can someone fetch Emma to make the order?"
              avatarSrc='http://www.placecage.com/201/198'
          />
          <ConversationItem
              title='New Hire: Bill'
              timeString='2 weeks ago'
              previewText="Everyone let's welcome Mr. Murray!"
              avatarSrc='http://www.fillmurray.com/200/200'
          />
          <ConversationItem
              title='Stephen: Please keep quiet'
              timeString='3 weeks ago'
              previewText="It's getting too noisy in here!"
              avatarSrc='http://www.fillmurray.com/204/200'
          />
        </div>
      </div>
    );
  }
}
