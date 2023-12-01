import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Cyber Security</title>
          <meta property="og:title" content="Cyber Security" />
        </Head>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-container1">
                <img
                  alt="image"
                  src="https://www.ledr.com/colours/white.jpg"
                  className="home-image"
                />
                <div data-role="CloseMobileMenu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-links-container">
                <a href="#resources" className="home-link Anchor">
                  Resources
                </a>
                <a href="#inspiration" className="home-link01 Anchor">
                  Inspiration
                </a>
                <a href="#process" className="home-link02 Anchor">
                  Process
                </a>
                <a href="#ourstory" className="home-link03 Anchor">
                  Our story
                </a>
              </div>
            </div>
            <div className="home-links-container1">
              <a href="#resources" className="home-link04 Anchor">
                Terminology
              </a>
              <a href="#inspiration" className="home-link05 Anchor">
                CSKG
              </a>
              <a href="#process" className="home-link06 Anchor">
                Attacks and Protection
              </a>
              <a href="#ourstory" className="home-link07 Anchor">
                Survey
              </a>
            </div>
          </div>
        </div>
        <div id="resources" className="home-title">
          <div className="home-content-container">
            <div className="home-hero-text">
              <h1 className="home-heading">Cyber Security Fundamentals</h1>
              <span className="home-text">
                Vulnerabilities are a fundamental part of technology and are
                ever present throughout the web. Especially vulnerable are those
                who are unaware of certain signs, don&apos;t take preventative
                measures, or do not understand the methodology behind attacks.
                With proper education and knowledge to recognize warning signs,
                react accordingly, and/or act securely through various avenues,
                any online user will be able to protect their vulnerable
                information and protect their devices or accounts from being
                manipulated maliciously. 
              </span>
            </div>
          </div>
        </div>
        <div id="inspiration" className="home-terms">
          <div className="home-heading-container">
            <h2 className="home-text001 Section-Heading">
              Important Terminology
            </h2>
            <a
              href="https://tinyurl.com/y32wcdt8"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
              More Terms
            </a>
          </div>
          <div className="home-cards-container">
            <div className="home-features-card">
              <div className="home-text-container">
                <span className="home-heading01 Card-Heading">Access</span>
                <span className="home-text002">
                  The ability and means to communicate with or otherwise
                  interact with a system, to use system resources to handle
                  information, to gain knowledge of the information the system
                  contains, or to control system components and functions.
                </span>
              </div>
            </div>
            <div className="home-features-card01">
              <div className="home-text-container01">
                <span className="home-heading02 Card-Heading">Bot</span>
                <span className="home-text003">
                  A computer connected to the Internet that has been
                  surreptitiously / secretly compromised with malicious logic to
                  perform activities under the command and control of a remote
                  administrator.
                </span>
              </div>
            </div>
            <div className="home-features-card02">
              <div className="home-text-container02">
                <span className="home-heading03 Card-Heading">
                  Cybersecurity
                </span>
                <span className="home-text004">
                  The activity or process, ability or capability, or state
                  whereby information and communications systems and the
                  information contained therein are protected from and/or
                  defended against damage, unauthorized use or modification, or
                  exploitation.
                </span>
              </div>
            </div>
            <div className="home-features-card03">
              <div className="home-text-container03">
                <span className="home-heading04 Card-Heading">Hashing</span>
                <span className="home-text005">
                  A process of applying a mathematical algorithm against a set
                  of data to produce a numeric value (a &apos;hash value&apos;)
                  that represents the data.
                </span>
              </div>
            </div>
            <div className="home-features-card04">
              <div className="home-text-container04">
                <span className="home-heading05 Card-Heading">Macro Virus</span>
              </div>
              <span className="home-text006">
                A type of malicious code that attaches itself to documents and
                uses the macro programming capabilities of the document’s
                application to execute, replicate, and spread or propagate
                itself.
              </span>
            </div>
            <div className="home-features-card05">
              <div className="home-text-container05">
                <span className="home-heading06 Card-Heading">
                  Non-repudiation
                </span>
                <span className="home-text007">
                  A property achieved through cryptographic methods to protect
                  against an individual or entity falsely denying having
                  performed a particular action related to data.
                </span>
              </div>
            </div>
            <div className="home-features-card06">
              <div className="home-text-container06">
                <span className="home-heading07 Card-Heading">
                  Passive Attack
                </span>
                <span className="home-text008">
                  <span>
                    An actual assault perpetrated by an intentional threat
                    source that attempts to 
                  </span>
                  <span>
                    learn or make use of information from a system, but does not
                    attempt to alter the system, its resources, its data, or its
                    operations.
                  </span>
                  <br></br>
                  <br className="home-text012"></br>
                </span>
              </div>
            </div>
            <div className="home-features-card07">
              <div className="home-text-container07">
                <span className="home-heading08 Card-Heading">Private Key</span>
                <span className="home-text013">
                  <span>
                    A cryptographic key that must be kept confidential and is
                    used to enable the
                  </span>
                  <br></br>
                  <span>
                    operation of an asymmetric (public key) cryptographic
                    algorithm.
                  </span>
                </span>
              </div>
            </div>
            <div className="home-features-card08">
              <div className="home-text-container08">
                <span className="home-heading09 Card-Heading">Public Key</span>
                <span className="home-text017">
                  <span className="home-text018">
                    A cryptographic key that may be widely published and is used
                    to enable the
                  </span>
                  <br className="home-text019"></br>
                  <span className="home-text020">
                    operation of an asymmetric (public key) cryptographic
                    algorithm.
                  </span>
                  <br className="home-text021"></br>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-features-card09">
              <div className="home-text-container09">
                <span className="home-heading10 Card-Heading">Secret Key</span>
                <span className="home-text023">
                  <span className="home-text024">
                    A cryptographic key that is used for both encryption and
                    decryption, enabling the operation of a symmetric key
                    cryptography scheme.
                  </span>
                  <br className="Card-Text"></br>
                </span>
              </div>
            </div>
            <div className="home-features-card10">
              <div className="home-text-container10">
                <span className="home-heading11 Card-Heading">
                  Symmetric Key
                </span>
                <span className="home-text026">
                  <span className="home-text027 Card-Text">
                    A cryptographic key that is used to perform both the
                    cryptographic operation and its inverse, for example to
                    encrypt plaintext and decrypt ciphertext, or create a
                    message 
                  </span>
                  <span className="home-text028 Card-Text">
                    authentication code and to verify the code.
                  </span>
                  <br className="home-text029"></br>
                  <br className="Card-Text"></br>
                </span>
              </div>
            </div>
            <div className="home-features-card11">
              <div className="home-text-container11">
                <span className="home-heading12 Card-Heading">
                  DNS Protocol
                </span>
                <span className="home-text031">
                  <span className="home-text032">
                    A naming database in which internet domain names are located
                    and translated into Internet Protocol (IP) addresses.
                  </span>
                  <br className="Card-Text"></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator"></div>
        <div id="process" className="home-services">
          <div className="home-container2">
            <div className="home-heading-container1">
              <h1 className="home-text034">Cyber Security Knowledge Graphs</h1>
              <span className="home-text035">
                <span className="Section-Text">A CSKG </span>
                <span className="home-text037">
                  consists of nodes and edges that constitute a large-scale
                  security semantic network and provide holistic approaches for
                  processing massive volumes of complex cybersecurity data
                  derived from diverse sources.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-heading-container2">
              <h1 className="home-text040 Section-Heading">
                Cyber Security Knowledge Graphs
              </h1>
              <span className="home-text041">
                <span className="home-text042">
                  CSKGs can effectively extract and integrate information into
                  an intuitive graphical format while imitating the thinking
                  process of security specialists by checking data consistency
                  and logic principles.
                </span>
                <br className="home-text043"></br>
                <span className="home-text044">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-heading-container3">
              <h1 className="home-text046">Cyber Security Knowledge Graphs</h1>
              <span className="home-text047">
                The construction framework of a common CSKG follows basic cyber
                security principles to best determine how organizations’
                technology departments can protect important data. CSKGs are
                often utilized by large organizations to simplify the workflow
                across multiple members.
              </span>
            </div>
          </div>
          <img
            alt="image"
            src="/electronics-11-02287-g001-500h.png"
            className="home-image1"
          />
          <a
            href="https://www.mdpi.com/1738072"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link09"
          >
            Construction Framework of a Cyber Security Knowledge Graph
          </a>
        </div>
        <div className="home-section-separator1"></div>
        <div id="ourstory" className="home-extra">
          <div className="home-heading-container4">
            <h1 className="home-text048 Section-Heading">
              Attacks and Protection
            </h1>
            <span className="home-text049">
              VPNs work to protect user data while they are connected to either
              a public or private network, as both a vulnerable to attacks.
            </span>
          </div>
          <div className="home-cards-container1">
            <div className="home-left-section">
              <div className="home-content-container01">
                <span className="home-heading13 Card-Heading">
                  Types of Attacks
                </span>
                <span className="home-text050">
                  <span className="home-text051">Malware</span>
                  <span> </span>
                  <br></br>
                  <span>
                    Software that compromises the operation of a system by
                    performing an unauthorized function or process. It is often
                    counteracted with antivirus software which analyzes files in
                    search of signs of anything that is common across certain
                    types of malware.
                  </span>
                  <br></br>
                  <span className="home-text056">Ransomware</span>
                  <span>: blocks key components for a ransom</span>
                  <br></br>
                  <span className="home-text059">Worm</span>
                  <span>
                    : replicates and spreads to other vulnerable computers,
                    often utilizing a network and security failures
                  </span>
                  <br></br>
                  <span className="home-text062">Spyware</span>
                  <span>
                    : software that allows for attackers to monitor the actions
                    of the user of a compromised device: some common types
                    include keyloggers, which record keystrokes made by users
                    and allow for the attackers to steal credentials
                  </span>
                  <br></br>
                  <span className="home-text065">Trojan</span>
                  <span>
                    : malware that is disguised as a standard program which
                    tricks the user into installing/executing it, allowing for
                    it to steal sensitive information, monitor activity, crash
                    the device, or launch an attack
                  </span>
                  <br></br>
                  <span className="home-text068">Rootkit</span>
                  <span>
                    : while not originally created or used for malicious
                    purposes, rootkits provide foreign users to maintain control
                    over a computer without a user knowing by taking advantage
                    of the back door of operating systems.
                  </span>
                  <br></br>
                  <span className="home-text071">Adware</span>
                  <span>
                    : displays unwanted automatically generated adverts in order
                    to generate revenue for developers who hide it within their
                    software
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="home-text075">
                  <span className="home-text076">Other Attacks</span>
                  <br className="home-text077"></br>
                  <span className="home-text078">Phishing</span>
                  <span>
                    : fraudulent messaging in order to steal sensitive
                    information or install malware on the victim’s machine 
                  </span>
                  <br></br>
                  <span className="home-text081">
                    Distributed Denial-of-service (DDoS)
                  </span>
                  <span>
                    : floods systems, servers, or networks with traffic to
                    exhaust resources and bandwidth
                  </span>
                  <br></br>
                  <span className="home-text084">DNS Tunneling</span>
                  <span>
                    : utilizes DNS Protocol to communicate non-DNS traffic over
                    port 53. While it has various legitimate uses, it is also
                    used to disguise outbound traffic as DNS. DNS requests can
                    be manipulated to exfiltrate data from a compromised system
                    to the attacker’s infrastructure, but can also be used for
                    command and control callbacks from the attacker’s
                    infrastructure to a 
                  </span>
                  <span>compromised system.</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-right-section">
              <div className="home-card">
                <div className="home-content-container02">
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-4n7u-1500w.png"
                    className="home-pasted-image"
                  />
                  <span className="home-text088">
                    <br></br>
                    <span>
                      If any accounts are showing suspicious behavior, receiving
                      strange emails, sending strange emails, or changes to any
                      information, update any credentials used to sign in to
                      something more secure, contact any administrators to
                      temporarily disable your account, and notify anyone
                      receiving fraudulent information from your compromised
                      account.
                    </span>
                  </span>
                </div>
              </div>
              <div className="home-card1">
                <div className="home-content-container03">
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-8y6r-1500w.png"
                    className="home-pasted-image1"
                  />
                  <span className="home-text091">
                    <br></br>
                    <span>
                      If your device suddenly slows to a crawl, installs unknown
                      software, has excessive popups, or has changes made in the
                      settings or device in general not done by the user,
                      quickly scan for any malware using antivirus software,
                      notify your institution of a compromised device, isolate
                      the malware if possible, and restore data from a previous
                      backup if available.
                    </span>
                  </span>
                </div>
              </div>
              <div className="home-card2">
                <div className="home-content-container04">
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-9xqg-1500w.png"
                    className="home-pasted-image2"
                  />
                  <span className="home-text094">
                    <br></br>
                    <span>
                      If your files/server have been encrypted, the network
                      slows to a crawl, data usage is abnormally high, or
                      computers are functioning without local input, then
                      immediately take any devices connected off the network and
                      run the installed antivirus software, then manage the
                      network to remove any intruders.
                    </span>
                  </span>
                </div>
              </div>
              <div className="home-card3">
                <div className="home-content-container05">
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-4ec-300h.png"
                    className="home-pasted-image3"
                  />
                  <span className="home-text097">
                    <br className="SmallCard-Heading"></br>
                    <span className="home-text099">
                      The security of websites visited is also incredibly
                      important, so avoid inputting personal information into
                      websites that lack a lock next to their domain name, as
                      well as those with the http extension rather than the
                      https extension as it lacks Transport Layer Security
                      (TLS).
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-section-separator2"></div>
          <div className="home-cards-container2">
            <div className="home-right-section1">
              <div className="home-content-container06">
                <span className="home-heading14 Card-Heading">Protection</span>
                <span className="home-text100">
                  <span>
                    For the average person, extensive mapping and constant
                    upkeep is not necessary to maintain a safe 
                  </span>
                  <span>
                    online environment/presence, but various applications should
                    still be considered. Maintaining privacy and 
                  </span>
                  <span>
                    protecting personal information is still paramount when
                    engaging in the digital world.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="home-text104">
                  <span>
                    Much better than just responding attacks, prevention does
                    not allow them to happen and reduces any potential damage to
                    devices, accounts, and helps protect sensitive information.
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-card4">
                <img
                  alt="pastedImage"
                  src="/external/pastedimage-273x-1200h.png"
                  className="home-pasted-image4"
                />
                <div className="home-content-container07">
                  <span className="home-text107 SmallCard-Heading">
                    <span className="home-text108 SmallCard-Heading">
                      VPNs
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text109 SmallCard-Heading">r</span>
                    <span className="home-text110 SmallCard-Heading">
                      oute a user&apos;s internet connection through a remote
                      server rather than through their ISP. 
                    </span>
                    <span className="home-text111 SmallCard-Heading">
                      They act as intermediaries that hide the user’s IP
                      Address. VPNs can be installed on basically any device,
                      and can range from personal VPNs that function for an
                      individual, or larger VPNs that cover an entire network,
                      which are often used for large companies.
                    </span>
                  </span>
                </div>
              </div>
              <div className="home-card5">
                <div className="home-content-container08">
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-57uf-200h.png"
                    className="home-pasted-image5"
                  />
                  <span className="home-text112">
                    <span className="SmallCard-Heading">
                      IPSec (Internet Protocol Security)
                    </span>
                    <br></br>
                    <span>
                      Often used to set up a VPN, IPSec is a set of protocols
                      that set up secure connections over a network. It takes IP
                      (Internet Protocol) and adds 
                    </span>
                    <span>encryption and/or authentication.</span>
                    <br></br>
                    <span>
                      ○ Authentication Header: verifies origin of data and also
                      payload to confirm if there has 
                    </span>
                    <span>been modification during transmission</span>
                    <br></br>
                    <span>
                      ○ Encapsulating Security Payload: encrypts and
                      authenticates packets of data
                    </span>
                    <br></br>
                    <span>
                      ○ Internet Key Exchange: sets up a secure communication
                      channel between two people via 
                    </span>
                    <span>a VPN</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-card6">
                <div className="home-content-container09">
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-44xf-400w.png"
                    className="home-pasted-image6"
                  />
                  <span className="home-text126">
                    <span className="SmallCard-Heading">Antivirus</span>
                    <span className="SmallCard-Heading"> is a p</span>
                    <span className="home-text129">ro</span>
                    <span>
                      gram that monitors all software on a device and scans it
                      for signs of malware. It removes or contains detected
                      malware, but is not 100% effective as some methods of
                      attacking devices can sneak past.
                    </span>
                  </span>
                </div>
              </div>
              <div className="home-card7">
                <div className="home-content-container10">
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-yanm-300h-200h.png"
                    className="home-pasted-image7"
                  />
                  <span className="home-text131">
                    <span className="SmallCard-Heading">
                      Network Security Devices
                    </span>
                    <br></br>
                    <span>
                      Firewall: Inspects traffic in and out of a network using a
                      set of security rules, blocking 
                    </span>
                    <span>threats.</span>
                    <br></br>
                    <span>
                      ○ IPS (Intrusion Prevent System): Identifies, reports, and
                      prevents incoming malware, 
                    </span>
                    <span>similar to a firewall and are often integrated</span>
                    <br></br>
                    <span>
                      ○ IDS (Intrusion Detection System): alerts user of
                      malicious software/if device is 
                    </span>
                    <span>compromised</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-separator3"></div>
        <div className="home-get-in-touch">
          <h2 className="home-text143 Section-Heading">Survey</h2>
          <a
            href="https://forms.gle/QjRiCPkyJBpAxAU36"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              Click on this
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text145">Link</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              to access the survey and provide feedback based on your
              experience. Thank you for visiting the website!
            </span>
          </a>
        </div>
        <div className="home-section-separator4"></div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #b9b9b9;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
          }
          .home-mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon {
            width: 24px;
            height: 24px;
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link01 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-links-container1 {
            display: flex;
            flex-wrap: wrap;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link04 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link05 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link06 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link07 {
            text-decoration: none;
          }
          .home-title {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tenunits);
            background-size: cover;
            justify-content: center;
            background-image: url('https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png');
            background-repeat: no-repeat;
            background-position: center;
          }
          .home-content-container {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
            background-color: #bbbbbb;
          }
          .home-hero-text {
            width: 65%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            box-shadow: 0px 5px 10px 0px #edc4c4;
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-text {
            color: #5e5e5e;
            font-size: 18px;
            text-align: center;
            font-family: 'Raleway';
            font-weight: 400;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-fiveunits);
            text-transform: none;
            text-decoration: none;
          }
          .home-terms {
            width: 100%;
            height: 1160px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: 22px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text001 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-link08 {
            color: #29d0c0;
            text-decoration: underline;
          }
          .home-cards-container {
            width: 1327px;
            height: 802px;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .home-features-card {
            width: 270px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading01 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text002 {
            color: var(--dl-color-gray-700);
            font-size: 14px;
            text-align: left;
          }
          .home-features-card01 {
            width: 249px;
            height: 268px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text-container01 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading02 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text003 {
            color: var(--dl-color-gray-700);
            font-size: 14px;
            text-align: left;
          }
          .home-features-card02 {
            width: 271px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: center;
          }
          .home-text-container02 {
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-style: hidden;
            border-width: 1px;
            flex-direction: column;
          }
          .home-heading03 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text004 {
            color: var(--dl-color-gray-700);
            font-size: 14px;
            text-align: left;
          }
          .home-features-card03 {
            width: 215px;
            height: 269px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text-container03 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading04 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text005 {
            color: var(--dl-color-gray-700);
            font-size: 14px;
            text-align: left;
          }
          .home-features-card04 {
            width: 246px;
            height: 269px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: flex-start;
          }
          .home-text-container04 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading05 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text006 {
            color: var(--dl-color-gray-700);
            font-size: 14px;
          }
          .home-features-card05 {
            width: 229px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text-container05 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading06 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text007 {
            color: var(--dl-color-gray-700);
            font-size: 14px;
            text-align: left;
          }
          .home-features-card06 {
            width: 211px;
            height: 291px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text-container06 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading07 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text008 {
            color: var(--dl-color-gray-700);
            font-size: 14px;
            text-align: left;
          }
          .home-text012 {
            font-style: normal;
            font-family: 'Raleway';
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home-features-card07 {
            width: 208px;
            height: 291px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: flex-start;
          }
          .home-text-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading08 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text013 {
            color: var(--dl-color-gray-700);
            font-size: 14px;
          }
          .home-features-card08 {
            width: 240px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text-container08 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading09 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text017 {
            font-size: 14px;
          }
          .home-text018 {
            color: var(--dl-color-gray-700);
          }
          .home-text019 {
            color: var(--dl-color-gray-700);
          }
          .home-text020 {
            color: var(--dl-color-gray-700);
          }
          .home-text021 {
            color: var(--dl-color-gray-700);
          }
          .home-features-card09 {
            width: 233px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading10 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text023 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-text024 {
            font-size: 14px;
          }
          .home-features-card10 {
            width: 224px;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text-container10 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading11 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text026 {
            color: var(--dl-color-gray-700);
            font-size: 1px;
            font-style: normal;
            text-align: left;
            font-family: 'Raleway';
            font-weight: 400;
            line-height: 1.55;
            text-transform: none;
            text-decoration: none;
          }
          .home-text027 {
            font-size: 14px;
          }
          .home-text028 {
            font-size: 14px;
          }
          .home-text029 {
            color: var(--dl-color-gray-700);
            font-size: 14px;
          }
          .home-features-card11 {
            width: 207px;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text-container11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading12 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text031 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .home-text032 {
            font-size: 14px;
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-services {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-heading-container1 {
            width: 45%;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text034 {
            color: #ffffff;
            font-size: 48px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1.22;
            margin-bottom: var(--dl-space-space-fourunits);
            text-transform: none;
            text-decoration: none;
          }
          .home-text035 {
            color: var(--dl-color-gray-700);
            text-align: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-right-width: 0px;
          }
          .home-text037 {
            font-size: 20px;
          }
          .home-heading-container2 {
            width: 45%;
            height: 396px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text040 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text041 {
            color: var(--dl-color-gray-700);
            height: 306px;
            text-align: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-text042 {
            font-size: 20px;
          }
          .home-text043 {
            font-size: 20px;
          }
          .home-text044 {
            font-size: 20px;
          }
          .home-heading-container3 {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text046 {
            color: #ffffff;
            font-size: 48px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 700;
            line-height: 1.22;
            margin-bottom: var(--dl-space-space-fourunits);
            text-transform: none;
            text-decoration: none;
          }
          .home-text047 {
            color: var(--dl-color-gray-700);
            font-size: 20px;
            text-align: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-left-width: 0px;
          }
          .home-image1 {
            width: 975px;
            height: 446px;
            object-fit: cover;
          }
          .home-link09 {
            text-decoration: underline;
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-extra {
            width: 100%;
            height: 2829px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-heading-container4 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .home-text048 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text049 {
            color: var(--dl-color-gray-700);
            text-align: center;
            border-color: #cecaca;
            border-width: 1px;
          }
          .home-cards-container1 {
            width: 100%;
            height: 1306px;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left-section {
            width: 50%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            margin-right: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .home-content-container01 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: flex-start;
          }
          .home-heading13 {
            text-align: left;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text050 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text051 {
            text-decoration: underline;
          }
          .home-text056 {
            font-weight: 700;
          }
          .home-text059 {
            font-weight: 700;
          }
          .home-text062 {
            font-weight: 700;
          }
          .home-text065 {
            font-weight: 700;
          }
          .home-text068 {
            font-weight: 700;
          }
          .home-text071 {
            font-weight: 700;
          }
          .home-text075 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text076 {
            text-decoration: underline;
          }
          .home-text077 {
            text-decoration: underline;
          }
          .home-text078 {
            font-weight: 700;
          }
          .home-text081 {
            font-weight: 700;
          }
          .home-text084 {
            font-weight: 700;
          }
          .home-right-section {
            width: 1077px;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-card {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-content-container02 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-pasted-image {
            align-self: center;
          }
          .home-text088 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card1 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-content-container03 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-pasted-image1 {
            align-self: center;
          }
          .home-text091 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card2 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-content-container04 {
            height: 562px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-pasted-image2 {
            align-self: center;
          }
          .home-text094 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card3 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-content-container05 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-pasted-image3 {
            width: 256px;
            height: 259px;
            align-self: center;
          }
          .home-text097 {
            font-size: 18px;
            text-align: left;
            font-family: 'Raleway';
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-doubleunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-text099 {
            font-weight: 400;
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #807f7f;
          }
          .home-cards-container2 {
            width: 1395px;
            height: 1133px;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-right-section1 {
            width: 1409px;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content-container06 {
            width: 100%;
            height: 192px;
            display: flex;
            align-items: flex-start;
            margin-left: 0px;
            border-color: #c4c2c2;
            border-style: solid;
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: flex-start;
          }
          .home-heading14 {
            align-self: center;
            text-align: center;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text100 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text104 {
            text-align: center;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-card4 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-pasted-image4 {
            align-self: center;
          }
          .home-content-container07 {
            height: 270px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-text107 {
            font-size: 18px;
            text-align: left;
            font-family: 'Raleway';
            font-weight: 700;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-doubleunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-text108 {
            font-weight: 700;
          }
          .home-text109 {
            font-weight: 400;
          }
          .home-text110 {
            font-weight: 400;
          }
          .home-text111 {
            font-weight: 400;
          }
          .home-card5 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-content-container08 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-pasted-image5 {
            width: 382px;
            height: 159px;
            align-self: center;
          }
          .home-text112 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-card6 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-content-container09 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-pasted-image6 {
            width: 324px;
            height: 252px;
            align-self: center;
          }
          .home-text126 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-text129 {
            font-style: normal;
            font-weight: 400;
          }
          .home-card7 {
            width: 48%;
            height: 398px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-content-container10 {
            height: 346px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .home-pasted-image7 {
            width: 162px;
            height: 50%;
            align-self: center;
          }
          .home-text131 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-get-in-touch {
            width: 100%;
            height: 213px;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .home-text143 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-text145 {
            color: #2ab3a7;
          }
          .home-section-separator4 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          @media (max-width: 1200px) {
            .home-navbar {
              height: 78px;
            }
            .home-links-container1 {
              top: 0px;
              left: 0px;
              right: 0px;
              bottom: 0px;
              margin: auto;
              justify-content: center;
            }
            .home-title {
              background-image: url('https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png');
            }
            .home-content-container {
              background-color: #c6c6c6;
            }
            .home-heading {
              color: var(--dl-color-gray-black);
              font-size: 48px;
              box-shadow: rgb(195, 167, 167) 5px 5px 10px 0px;
              font-family: Montserrat;
              font-weight: 700;
              line-height: 1.22;
              text-transform: none;
              text-decoration: underline none;
            }
            .home-text035 {
              color: var(--dl-color-gray-700);
            }
            .home-text041 {
              color: var(--dl-color-gray-700);
            }
            .home-text047 {
              color: var(--dl-color-gray-700);
            }
            .home-image1 {
              width: 806px;
              height: 374px;
            }
            .home-text049 {
              color: var(--dl-color-gray-700);
            }
          }
          @media (max-width: 991px) {
            .home-title {
              flex-direction: column-reverse;
            }
            .home-content-container {
              flex-direction: column-reverse;
            }
            .home-hero-text {
              width: 80%;
            }
            .home-cards-container1 {
              flex-direction: column;
            }
            .home-left-section {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .home-right-section {
              width: 100%;
            }
            .home-cards-container2 {
              flex-direction: column;
            }
            .home-right-section1 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-links-container1 {
              display: none;
            }
            .home-heading-container {
              width: 100%;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-features-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card01 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card02 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card03 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card04 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card05 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card06 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card07 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card08 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card09 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card10 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-features-card11 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-heading-container1 {
              width: 100%;
            }
            .home-heading-container2 {
              width: 100%;
            }
            .home-heading-container3 {
              width: 100%;
            }
            .home-heading-container4 {
              width: 100%;
            }
            .home-cards-container1 {
              align-items: center;
              flex-direction: column;
            }
            .home-cards-container2 {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .home-title {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content-container {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-hero-text {
              width: 100%;
            }
            .home-terms {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-features-card {
              width: 100%;
            }
            .home-features-card01 {
              width: 100%;
            }
            .home-features-card02 {
              width: 100%;
            }
            .home-features-card03 {
              width: 100%;
            }
            .home-features-card04 {
              width: 100%;
            }
            .home-features-card05 {
              width: 100%;
            }
            .home-features-card06 {
              width: 100%;
            }
            .home-features-card07 {
              width: 100%;
            }
            .home-features-card08 {
              width: 100%;
            }
            .home-features-card09 {
              width: 100%;
            }
            .home-features-card10 {
              width: 100%;
            }
            .home-features-card11 {
              width: 100%;
            }
            .home-services {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-extra {
              padding-top: var(--dl-space-space-fiveunits);
            }
            .home-text048 {
              text-align: center;
            }
            .home-card {
              width: 100%;
            }
            .home-card1 {
              width: 100%;
            }
            .home-card2 {
              width: 100%;
            }
            .home-card3 {
              width: 100%;
            }
            .home-card4 {
              width: 100%;
            }
            .home-card5 {
              width: 100%;
            }
            .home-card6 {
              width: 100%;
            }
            .home-card7 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
