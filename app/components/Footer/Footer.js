function Footer() {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer className="border-t shadow-sm border-slate-900 text-center lg:text-left static bottom-0">
            <div className="bg-black/5 p-4 text-center text-surface dark:text-white">
                © {year} GitHub Profile Lookup
            </div>
        </footer>
    )
}

export default Footer;