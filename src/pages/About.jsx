import PropTypes from 'prop-types';

const About = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>
        Maecenas posuere luctus arcu eu aliquam. Nullam fringilla dapibus
        elementum. Proin gravida vitae lorem et dictum. Nullam ut finibus elit.
        Praesent elementum, turpis sit amet sollicitudin rutrum, mauris velit
        finibus lorem, vel rhoncus nulla enim nec erat. Nullam nec tempus
        tortor, ut sodales quam. Donec rhoncus felis nibh, a consequat urna
        ultrices id. Donec quis pulvinar nibh. Nullam non odio urna. Proin
        hendrerit magna nisl, at vulputate quam hendrerit convallis. Mauris
        lobortis orci fermentum ante accumsan posuere. Sed pellentesque eget
        tellus vel vulputate. Nullam eget tortor id purus dictum condimentum.
        Duis ornare massa vulputate mauris egestas placerat. Sed ac nunc lacus.
      </p>

      <p>
        Donec semper orci et auctor malesuada. Donec eget fermentum nunc, nec
        dictum neque. Donec pellentesque ligula felis, aliquam aliquam mauris
        accumsan eget. Quisque pretium massa vel magna gravida, vitae
        scelerisque eros cursus. Nam luctus ante ex, eget lacinia eros dictum
        at. Fusce sagittis dignissim augue vel lobortis. Aenean accumsan lacinia
        luctus. Maecenas bibendum consectetur vehicula. Ut faucibus commodo
        auctor. Nullam blandit nunc mollis tristique rhoncus. Vivamus ac urna
        accumsan nunc hendrerit imperdiet. Praesent cursus ipsum sit amet
        rhoncus consequat. Nullam hendrerit fringilla congue. Duis semper enim a
        enim malesuada efficitur.
      </p>

      <p>
        Nam egestas ultrices rutrum. Suspendisse feugiat dui in tortor finibus
        porta ut vel augue. Ut egestas sem sit amet pharetra blandit. Vivamus et
        velit a ex efficitur volutpat. Aenean cursus neque fringilla quam
        elementum, ut dictum diam eleifend. Vivamus a eros eget dui imperdiet
        vehicula at a arcu. Suspendisse feugiat libero augue, sed sodales urna
        condimentum nec. Suspendisse sapien mi, consequat vel laoreet id,
        scelerisque ac mauris. Fusce consequat sollicitudin justo, ut accumsan
        felis viverra vitae. Maecenas ultricies elit at lorem rhoncus facilisis.
        Mauris enim augue, varius quis venenatis sed, ornare non sapien. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed non nisi non neque convallis pulvinar. Morbi
        pellentesque magna ac tortor tempus, et scelerisque sem mollis. Proin at
        mauris eget arcu vulputate varius vel sit amet velit.
      </p>
    </>
  );
};

About.defaultProps = {
  title: 'About page',
};

About.propTypes = {
  title: PropTypes.string.isRequired,
};

export default About;
