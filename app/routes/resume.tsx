import type { LinksFunction } from '@remix-run/node';
import { forwardRef } from 'react';
import styles from '../styles/resume.css';

export function meta() {
  return {
    title: "Josh Marantz's Resume",
  };
}

export function headers() {
  return {
    'cache-control': 's-maxage=604800',
    'X-Robots-Tag': 'noindex',
  };
}

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

function classList(...classes: (string | null | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const Link = forwardRef<HTMLAnchorElement, React.HTMLProps<HTMLAnchorElement>>((props, ref) => (
  <a
    ref={ref}
    target="_blank"
    {...props}
    className={classList(props.className, props.children === props.href && 'dont-append-link')}
  />
));

export default function Resume() {
  return (
    <main>
      <h1>Josh Marantz</h1>
      <aside>
        <dl>
          <div>
            <dt>Email</dt>
            <dd>
              <Link href="mailto:josh@marantz.dev" className="dont-append-link">
                josh@marantz.dev
              </Link>
            </dd>
          </div>

          <div>
            <dt>Github</dt>
            <dd>
              <Link href="https://www.github.com/JNaftali" className="dont-append-link">
                JNaftali
              </Link>
            </dd>
          </div>

          <div>
            <dt>Phone</dt>
            <dd>
              <Link href="tel:7324257681" className="dont-append-link">
                732-425-7681
              </Link>
            </dd>
          </div>
        </dl>
      </aside>
      <h2>Who am I</h2>
      <p>Hi! My name's Josh. I'm a fullstack web developer, bootcamp grad, and folk dancer.</p>
      <h2>What I do</h2>
      <p>
        I do a lot of different things! I'm most comfortable on the back side of the frontend -
        business logic, fetching data, state management, component architecture and (where
        applicable) wrangling types. I've done a fair amount of work with HTML and CSS, focused on
        structure and accessibility rather than presentation. I've also written server-side code -
        API endpoints, templates, even database queries and migrations.
      </p>
      <p>
        I also enjoy working with people! After finishing Dev Bootcamp, I worked to mentor the
        students that came after me. I love discussing and learning about programming with other
        people. Now that Dev Bootcamp has shut down I volunteer at{' '}
        <Link href="https://codebar.io/">Codebar</Link> to scratch a similar itch. I really enjoy
        pair programming and working with colleagues.
      </p>
      <h2>What technologies I've used</h2>
      <ul>
        <li>HTML, CSS, and many of the DOM APIs</li>
        <li>
          Client side Typescript (and Javascript). This includes frameworks like React and Angular
          as well as state management tools like Redux and NGRX and much more.
        </li>
        <li>
          Server side Typescript (and Javascript) via Node, including various ways of rendering
          client side frameworks on the server
        </li>
        <li>Python including the Django web framework</li>
        <li>Creating reusable environments with Docker</li>
        <li>And more! Ruby, SVG, Lua and Bash scripting</li>
        <li>
          And RegExp. Somehow everything I do ends up using regular expressions and I don't mind in
          the least.
        </li>
      </ul>
      <h2 className="page-break">Where I've worked and what I've built there</h2>
      <h3>
        Developer at <Link href="https://www.sesameworkshop.org/">Sesame Workshop</Link> (2016-2017)
      </h3>
      <ul>
        <li>They make the Sesame Street TV program among lots of other children's programming.</li>
        <li>My first job out of bootcamp!</li>
        <li className="project">
          Built a small webapp for teachers to review student submissions (and for students to see
          their grades) as part of{' '}
          <Link href="http://sesamestreetenglish.com/">Sesame Street english</Link>
          <ul>
            <li>Refactored from webcomponents to React for better browser support</li>
            <li>SPA frontend, node backend with both a MySQL and Mongo databases</li>
            <li>Wrote a tiny library to make SVG pie charts!</li>
          </ul>
        </li>
      </ul>
      <h3>
        Fullstack Developer at <Link href="https://thelabnyc.com/">Thelabnyc</Link> (2017-present)
      </h3>
      <ul>
        <li>Thelab is a digital agency – ad campaigns, photography, and web development.</li>
        <li>
          My role is mostly writing client and server side Typescript (interactive components,
          client side routing, etc.). I also write a fair amount of Python code to configure the{' '}
          <Link href="https://wagtail.io">Wagtail CMS</Link> that we use (and to make miscellaneous
          API enpoints).
        </li>
        <li className="project">
          SwoonReads
          <ul>
            <li>
              An imprint of <Link href="https://us.macmillan.com/">Macmillian publishing</Link>{' '}
              focused on YA/romance novels.
            </li>
            <li>
              Their website was a social media site for authors to share their works and receive
              feedback from readers. The most popular works were chosen by Macmillian to be
              published.
            </li>
            <li>
              Launched long before I joined Thelab. Initially built using Django templates and
              JQuery.
            </li>
            <li>
              My first task at Thelab was to rewite some of the more interactive bits in typescript,
              React and Redux. These included the "edit profile" form, the custom comments, and the
              e-reader.
            </li>
          </ul>
        </li>
        <li className="project">
          Devacurl
          <ul>
            <li>A hair care company focusing on products and salons for people with curly hair.</li>
            <li>
              We built (and now maintain) 2 websites for them:
              <ul>
                <li>
                  <Link href="https://www.devacurl.com">https://www.devacurl.com</Link> - A
                  consumer-facing e-commerce site
                </li>
                <li>
                  <Link href="https://www.devacurlpro.com">https://www.devacurlpro.com</Link> - A
                  site for hair care professionals to learn about classes and new products
                </li>
              </ul>
            </li>
            <li>The first project at Thelab that I helped launch!</li>
            <li>
              Both sites draw content from a shared Django backend. The frontends were Angular
              Universal apps - server-rendered in Node and transformed into SPAs (single page apps)
              on the client side. Caching via AWS Cloudfront kept users from having to wait for
              pages to render on the server. We used{' '}
              <Link href="https://www.shopify.com/">Shopify's</Link> Graphql APIs to provide
              e-commerce functionality and NGRX for structured global state.
            </li>
          </ul>
        </li>
        <li className="project">
          La Aurora
          <ul>
            <li>A cigar factory from the Dominican Republic.</li>
            <li>We're building them a new e-commerce site, to be released early 2021.</li>
            <li>
              This site still uses the Django backend Thelab is familiar with, but the frontend is
              written in Next.js (a server-rendered React framework) and hosted on Vercel (which
              also provides caching). We are leveraging{' '}
              <Link href="https://saleor.io/">Saleor</Link> this time for e-commerce functionality
              and Redux Toolkit to manage global state.
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
}
