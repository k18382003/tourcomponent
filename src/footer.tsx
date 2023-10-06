
export default function Footer() {
    const PageLinks = [
        {
            id: 1,
            href: 'https://react-components-demo.netlify.app/',
            text: 'home',
        },
    ];

    const SocialIcons = [
        {
            id: 2,
            href: 'https://github.com/k18382003/tourcomponent.git',
            name: 'fab fa-github',
        },
    ];
    return (
        <>
            <footer className="section footer">
                <ul className="footer-icons">
                    {SocialIcons.map((icon) => {
                        return (
                            <li key={icon.id}>
                                <a
                                    href={icon.href}
                                    target="_blank"
                                    className="footer-icon"
                                    rel="noreferrer"
                                >
                                    <i className={icon.name}></i>
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <ul className="footer-links">
                    {PageLinks.map((link) => {
                        return (
                            <li key={link.href}>
                                <a href={link.href} className="footer-link">
                                    {link.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </footer>
        </>
    );
}
