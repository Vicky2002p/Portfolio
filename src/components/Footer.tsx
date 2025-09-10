export default function Footer() {
  return (
    <footer className="bg-dark_slate_gray-600 text-wheat-500 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Vivek Patel. All rights reserved.</p>
      <div className="mt-2">
        <a href="https://github.com/Vicky2002p" className="mx-2 hover:text-mahogany-400">GitHub</a>
        <a href="https://linkedin.com/in/vivek-patel-491458223" className="mx-2 hover:text-mahogany-400">LinkedIn</a>
        <a href="mailto:vivekjpatel2002@gmail.com" className="mx-2 hover:text-mahogany-400">Email</a>
      </div>
    </footer>
  );
}