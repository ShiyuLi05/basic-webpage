

function Nav() {
    const lists = ['Home', 'About', 'Products', 'Testimonials', 'Blogs'];
  return (
    <ul>
      {lists.map(list => (
          <li key={list}>{list}</li>
      ))}
    </ul>
  )
}

export default Nav;