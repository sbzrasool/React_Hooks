import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const UseEffect = () => {

    useEffect(() => {
        console.log('Component Mounted');

        const scrollHandler = () => {
            console.log('page scrolled');
        }

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
            console.log('Component un-mounted');
        }
    }, []);


    const unmount = () => {
        ReactDOM.render(<p>Hello</p>, document.getElementById("root"));
      };
                        
      return (
        <div>
          {" "}
          <p>Open console and Scroll this page</p>{" "}
          <button onClick={unmount}>Unmount component</button>{" "}
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum{" "}
          </p>{" "}
        </div>
      );

}

export default UseEffect;