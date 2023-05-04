
const Footer = () => {
    return (
        <div className="bg-neutral">
            <footer className="footer  p-10 text-neutral-content pl-20 lg:pl-80">
  
  <div>
    <span className="footer-title">Chefs</span> 
    <a className="link link-hover">Enrique Olvera</a>
    <a className="link link-hover">Benito Molina</a>
    <a className="link link-hover">Daniel Ovadía</a>
    <a className="link link-hover">Luis Aranda</a>
    
  </div> 
  <div>
    <span className="footer-title">Recipe</span> 
    <a className="link link-hover">Patria</a>
    <a className="link link-hover">Cordero</a>
    <a className="link link-hover">Langosta</a>
    <a className="link link-hover">Pasilla</a>
  </div> 
  <div>
    <span className="footer-title">About US</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
    <a className="link link-hover">Head Office</a>
  </div>

  
</footer>
<hr className="w-25 h-0.5 my-8 bg-gray-100 border-0 rounded dark:bg-gray-700"></hr>

<p className="text-white text-center pt-8 pb-12 text-sm">This site alright Reserved by <br /> <a className="text-warning text-xl leading-6" href="www.facebook.com/iammehedihridoy">© Mehedi Hasan Hridoy</a></p>
        </div>
    );
};

export default Footer;