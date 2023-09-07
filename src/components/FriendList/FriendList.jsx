import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (<ul className ={css.friendList}>
        {friends.map(friend => {
            return (
                <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}
                />
                );
        })}
    </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}