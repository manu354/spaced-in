import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';

function signOut() {

}

class SidenavContent extends Component {
    componentDidMount() {
        const {history} = this.props;
        const that = this;
        const pathname = `${history.location.pathname}`;// get current path

        const menuLi = document.getElementsByClassName('menu');
        for (let i = 0; i < menuLi.length; i++) {
            menuLi[i].onclick = function (event) {
                for (let j = 0; j < menuLi.length; j++) {
                    const parentLi = that.closest(this, 'li');
                    if (menuLi[j] !== this && (parentLi === null || !parentLi.classList.contains('open'))) {
                        menuLi[j].classList.remove('open')
                    }
                }
                this.classList.toggle('open');
            }
        }

        const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
        try {
            const activeNav = this.closest(activeLi, 'ul'); // select closest ul
            if (activeNav.classList.contains('sub-menu')) {
                this.closest(activeNav, 'li').classList.add('open');
            } else {
                this.closest(activeLi, 'li').classList.add('open');
            }
        } catch (error) {

        }
    }

    componentWillReceiveProps(nextProps) {

        const {history} = nextProps;
        const pathname = `${history.location.pathname}`;// get current path

        const activeLi = document.querySelector('a[href="' + pathname + '"]');// select current a element
        try {
            const activeNav = this.closest(activeLi, 'ul'); // select closest ul
            if (activeNav.classList.contains('sub-menu')) {
                this.closest(activeNav, 'li').classList.add('open');
            } else {
                this.closest(activeLi, 'li').classList.add('open');
            }
        } catch (error) {

        }
    }


    closest(el, selector) {
        try {
            let matchesFn;
            // find vendor prefix
            ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
                if (typeof document.body[fn] == 'function') {
                    matchesFn = fn;
                    return true;
                }
                return false;
            });

            let parent;

            // traverse parents
            while (el) {
                parent = el.parentElement;
                if (parent && parent[matchesFn](selector)) {
                    return parent;
                }
                el = parent;
            }
        } catch (e) {

        }

        return null;
    }

    render() {
        return (
            <CustomScrollbars className=" scrollbar">
                <ul className="nav-menu">

                    <li className="nav-header">
                        <IntlMessages id="sidebar.main"/>
                    </li>


                    <li className="menu collapse-box">
                        <Button onClick={() => {
                            (async () => {
                                try {
                                    const rawResponse = await fetch('/signout', {
                                        method: 'POST',
                                        redirect: "follow",
                                        credentials: "same-origin",
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({uname: localStorage.getItem('user_name')})
                                    });
                                }
                                catch (e) {
                                    console.log(e)
                                }
                                localStorage.removeItem('user_id');

                                localStorage.removeItem('user_name');
                                window.location.reload(true);
                            })();

                        }}>
                            <i className="zmdi zmdi-close zmdi-hc-fw"/>
                            <span className="nav-text">
                            <IntlMessages id="Sign Out"/>
                        </span>
                        </Button>
                    </li>
                </ul>
            </CustomScrollbars>
        );
    }
}

export default withRouter(SidenavContent);
