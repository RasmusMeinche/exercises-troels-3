export default function Headers() {
  return (
    <header className="full-bleed">
      <section>
        <div>
          <h1>AskExperts</h1>
        </div>
        <div>
          <a href="/">Home</a>
          <a href="/casestudy">Case Study</a>
          <a href="/team">Team</a>
          <a href="/about">About</a>
        </div>
        <div>
          <button>Login</button>
        </div>

        <div id="popup" popover>
          <h2>Dashboard Login</h2>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button popovertarget="popup">Go to dashboard</button>
        </div>
      </section>
    </header>
  );
}