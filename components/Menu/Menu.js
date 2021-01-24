import React from 'react';
import SectionLink from '../SectionLink'
import Hamburger from '../Hamburger/Hamburger'
import { SvgIcon } from '../Svg'
import styles from './Menu.module.css'

class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            activeSection: 0,
            sections: [
                {
                    title: "Home",
                    href: "/#Home"
                },
                {
                    title: "Story",
                    href: "/#Story"
                },
                {
                    title: "Teaser",
                    href: "/#Teaser"
                },
                {
                    title: "Progress",
                    href: "/#Progress"
                },
                {
                    title: "About",
                    href: "/#About"
                }
            ],
            socialMedia: [
                {
                    icon: "Github",
                    href: "https://github.com/JPsiInVR"
                },
                {
                    icon: "Youtube",
                    href: "https://www.youtube.com/channel/UC9OGzydXjsrVAw2Dv6VZw9A"
                },
                {
                    icon: "Twitter",
                    href: "https://twitter.com/JUNO_2021"
                },
                {
                    icon: "Instagram",
                    href: "https://www.instagram.com/jpsiunderobservation/"
                }
            ]
        }
    }

    enableMenuOnLargeDevices = () => {
        //default lg breakpoint
        if (window.innerWidth > 1024) {
            this.isOpen = this.setState({ isOpen: true })
        }
    }

    toggleMenu = (event) => {
        this.setState({ isOpen: event.target.checked })
    }

    changeActiveSection = (newSection) => {
        this.setState({ activeSection: newSection })
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.enableMenuOnLargeDevices()
            window.addEventListener('resize', this.enableMenuOnLargeDevices)
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.enableMenuOnLargeDevices)
        }
    }


    render() {
        const offset = {
            top: 55 + this.state.activeSection * 44
        }

        return (
            <>
                <Hamburger isOpen={this.state.isOpen} onChange={this.toggleMenu} />

                <nav className={`${styles.menu} ${this.state.isOpen ? "transform translate-x-0" : "transform translate-x-full"}`}>
                    <ul id={styles.menuLinkList}>
                        {
                            this.state.sections.map((section, index) =>
                                <li key={section.title}>
                                    <SectionLink isActive={index === this.state.activeSection} section={section} onClick={() => this.changeActiveSection(index)} />
                                </li>)
                        }
                    </ul>

                    <div id={styles.activeSectionIndicator} style={offset} />

                    <div id={styles.socialMediaLinkList}>
                        {
                            this.state.socialMedia.map(socialMedium =>
                                <a className="block" href={socialMedium.href}>
                                    <SvgIcon icon={socialMedium.icon} />
                                </a>
                            )
                        }
                    </div>
                </nav>
            </>
        )
    }
}

export default Menu