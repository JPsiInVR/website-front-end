import useWindowSize from "../hooks/useWindowSize";

const hoverIconStyle =
  "transition-opacity opacity-60 duration-300 ease-in hover:opacity-100";

const GithubIcon = () => (
  <svg
    title='Github'
    className={hoverIconStyle}
    width='32'
    height='32'
    viewBox='0 0 36 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18 0.75004C8.055 0.75004 0 8.67004 0 18.438C0 26.2545 5.157 32.883 12.3075 35.22C13.2075 35.3865 13.5375 34.839 13.5375 34.3695C13.5375 33.9495 13.5225 32.8365 13.515 31.362C8.508 32.4285 7.452 28.989 7.452 28.989C6.633 26.9475 5.4495 26.4015 5.4495 26.4015C3.819 25.305 5.5755 25.3275 5.5755 25.3275C7.383 25.4505 8.3325 27.15 8.3325 27.15C9.9375 29.8545 12.546 29.073 13.575 28.6215C13.737 27.477 14.2005 26.6985 14.715 26.256C10.7175 25.8135 6.516 24.2925 6.516 17.5155C6.516 15.585 7.2135 14.007 8.3685 12.7695C8.166 12.3225 7.5585 10.524 8.526 8.08804C8.526 8.08804 10.0335 7.61404 13.476 9.90154C14.916 9.50854 16.446 9.31354 17.976 9.30454C19.506 9.31354 21.036 9.50854 22.476 9.90154C25.896 7.61404 27.4035 8.08804 27.4035 8.08804C28.371 10.524 27.7635 12.3225 27.5835 12.7695C28.731 14.007 29.4285 15.585 29.4285 17.5155C29.4285 24.3105 25.221 25.806 21.216 26.241C21.846 26.772 22.431 27.8565 22.431 29.514C22.431 31.881 22.4085 33.783 22.4085 34.3575C22.4085 34.821 22.7235 35.3745 23.646 35.1975C30.8475 32.8755 36 26.2425 36 18.438C36 8.67004 27.9405 0.75004 18 0.75004Z'
      fill='#FF7A00'
    />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    title='Youtube'
    className={hoverIconStyle}
    width='32'
    height='32'
    viewBox='0 0 36 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M34.162 9.56435C33.7731 8.11848 32.6331 6.97872 31.1874 6.58939C28.5464 5.86677 17.982 5.86677 17.982 5.86677C17.982 5.86677 7.41804 5.86677 4.77699 6.562C3.35914 6.95091 2.19136 8.11869 1.80244 9.56435C1.10742 12.2052 1.10742 17.6819 1.10742 17.6819C1.10742 17.6819 1.10742 23.1863 1.80244 25.7995C2.19177 27.2452 3.33133 28.3849 4.7772 28.7743C7.44585 29.4971 17.9824 29.4971 17.9824 29.4971C17.9824 29.4971 28.5464 29.4971 31.1874 28.8019C32.6333 28.4127 33.7731 27.273 34.1624 25.8273C34.8572 23.1863 34.8572 17.7097 34.8572 17.7097C34.8572 17.7097 34.885 12.2052 34.162 9.56435ZM14.6185 22.7415V12.6223L23.4034 17.6819L14.6185 22.7415Z'
      fill='#FF7A00'
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    title='Instagram'
    className={hoverIconStyle}
    width='32'
    height='32'
    viewBox='0 0 36 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M35.9648 10.5841C35.8804 8.67128 35.5711 7.35623 35.128 6.21673C34.6709 5.00717 33.9676 3.92426 33.0462 3.02403C32.146 2.10979 31.0559 1.39938 29.8604 0.949404C28.7143 0.506294 27.4061 0.196968 25.4933 0.112632C23.5662 0.0211528 22.9544 0 18.0667 0C13.1791 0 12.5673 0.0211528 10.6473 0.105489C8.73451 0.189826 7.41946 0.499426 6.28023 0.942262C5.0704 1.39938 3.98749 2.10264 3.08726 3.02403C2.17302 3.92426 1.46289 5.01432 1.01264 6.20986C0.569526 7.35623 0.260201 8.66414 0.175864 10.577C0.0843852 12.5041 0.0632324 13.1158 0.0632324 18.0035C0.0632324 22.8912 0.0843852 23.503 0.168722 25.4229C0.253058 27.3358 0.562658 28.6508 1.00577 29.7903C1.46289 30.9999 2.17302 32.0828 3.08726 32.983C3.98749 33.8972 5.07755 34.6076 6.27309 35.0576C7.41946 35.5007 8.72737 35.8101 10.6405 35.8944C12.5601 35.979 13.1722 35.9999 18.0599 35.9999C22.9475 35.9999 23.5593 35.979 25.4793 35.8944C27.3921 35.8101 28.7072 35.5007 29.8464 35.0576C32.2658 34.1222 34.1786 32.2094 35.114 29.7903C35.5568 28.6439 35.8664 27.3358 35.9508 25.4229C36.0351 23.503 36.0562 22.8912 36.0562 18.0035C36.0562 13.1158 36.0491 12.5041 35.9648 10.5841ZM32.7229 25.2823C32.6454 27.0404 32.3501 27.9898 32.104 28.6228C31.499 30.1911 30.2543 31.4358 28.686 32.0407C28.0531 32.2869 27.0968 32.5822 25.3455 32.6594C23.4467 32.744 22.8772 32.7649 18.0739 32.7649C13.2705 32.7649 12.6939 32.744 10.802 32.6594C9.04383 32.5822 8.09443 32.2869 7.46149 32.0407C6.68104 31.7523 5.97063 31.2952 5.39401 30.6974C4.79624 30.1136 4.33912 29.4104 4.05067 28.6299C3.80453 27.997 3.50922 27.0404 3.43202 25.2894C3.34741 23.3906 3.32653 22.8209 3.32653 18.0175C3.32653 13.2142 3.34741 12.6376 3.43202 10.7459C3.50922 8.98775 3.80453 8.03834 4.05067 7.40541C4.33912 6.62468 4.79624 5.91455 5.40116 5.33765C5.98464 4.73988 6.68791 4.28276 7.46864 3.99458C8.10157 3.74844 9.05812 3.45313 10.8091 3.37566C12.7079 3.29132 13.2777 3.27017 18.0808 3.27017C22.8912 3.27017 23.4607 3.29132 25.3526 3.37566C27.1108 3.45313 28.0602 3.74844 28.6931 3.99458C29.4736 4.28276 30.184 4.73988 30.7606 5.33765C31.3584 5.92141 31.8155 6.62468 32.104 7.40541C32.3501 8.03834 32.6454 8.99462 32.7229 10.7459C32.8072 12.6447 32.8284 13.2142 32.8284 18.0175C32.8284 22.8209 32.8072 23.3835 32.7229 25.2823Z'
      fill='#FF7A00'
    />
    <path
      d='M18.0667 8.75562C12.9612 8.75562 8.81885 12.8977 8.81885 18.0035C8.81885 23.1093 12.9612 27.2514 18.0667 27.2514C23.1725 27.2514 27.3146 23.1093 27.3146 18.0035C27.3146 12.8977 23.1725 8.75562 18.0667 8.75562ZM18.0667 24.0024C14.7545 24.0024 12.0679 21.316 12.0679 18.0035C12.0679 14.691 14.7545 12.0046 18.0667 12.0046C21.3792 12.0046 24.0656 14.691 24.0656 18.0035C24.0656 21.316 21.3792 24.0024 18.0667 24.0024Z'
      fill='#FF7A00'
    />
    <path
      d='M29.8396 8.38998C29.8396 9.58223 28.8729 10.5489 27.6803 10.5489C26.4881 10.5489 25.5214 9.58223 25.5214 8.38998C25.5214 7.19746 26.4881 6.23102 27.6803 6.23102C28.8729 6.23102 29.8396 7.19746 29.8396 8.38998Z'
      fill='#FF7A00'
    />
  </svg>
);

const TwitterIcon = () => (
  <svg
    title='Twitter'
    className={hoverIconStyle}
    width='32'
    height='32'
    viewBox='0 0 36 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18 0C8.06039 0 0 8.06039 0 18C0 27.9396 8.06039 36 18 36C27.9396 36 36 27.9396 36 18C36 8.06039 27.9396 0 18 0ZM26.2186 14.0345C26.2266 14.2116 26.2304 14.3896 26.2304 14.5684C26.2304 20.0278 22.0748 26.3232 14.4753 26.3235C12.1421 26.3235 9.97092 25.6396 8.14252 24.4677C8.46579 24.5058 8.79483 24.5248 9.12799 24.5248C11.0638 24.5248 12.8452 23.8645 14.2594 22.7563C12.4508 22.7227 10.9259 21.5283 10.3997 19.8866C10.6515 19.935 10.9105 19.9613 11.1761 19.9613C11.5532 19.9613 11.9185 19.9105 12.2657 19.8158C10.3752 19.4373 8.95111 17.7665 8.95111 15.7659C8.95111 15.7473 8.95111 15.7305 8.95166 15.7132C9.50839 16.0227 10.1451 16.209 10.8229 16.2298C9.71356 15.4896 8.98434 14.2243 8.98434 12.7908C8.98434 12.0339 9.18896 11.3247 9.54382 10.7141C11.5812 13.2141 14.6261 14.8582 18.0599 15.0309C17.989 14.7283 17.9525 14.413 17.9525 14.0889C17.9525 11.8081 19.8029 9.95773 22.0844 9.95773C23.2729 9.95773 24.3463 10.4601 25.1002 11.2632C26.0414 11.0775 26.9253 10.7336 27.7237 10.2604C27.4147 11.2247 26.7599 12.0339 25.9069 12.5456C26.7426 12.4456 27.5392 12.2239 28.2794 11.8949C27.7265 12.7235 27.0253 13.4514 26.2186 14.0345Z'
      fill='#FF7A00'
    />
  </svg>
);

const FooterBackgroundMobile = () => (
  <svg
    className='h-full w-screen'
    viewBox='0 0 862 1200'
    fill='none'
    preserveAspectRatio='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M862 1200V37.7313C634.67 9.32463 326.889 5.62397 0 0V1200H862Z'
      fill='#231F1F'
    />
  </svg>
);

const FooterBackgroundDesktop = () => (
  <svg
    className='h-full w-screen'
    preserveAspectRatio='none'
    viewBox='0 0 1919 1200'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1303.71 200.168C1249.33 14.5135 661.37 10.809 -1 0V1200H1918.5V713.811C1767.17 685.735 1535.25 944.895 1177.67 818.684C838.145 716.599 1358.1 385.823 1303.71 200.168Z'
      fill='#231F1F'
    />
  </svg>
);

const FooterBackground = () => (
  //lg breakpoint
  <div className='absolute bottom-0 h-full'>
    {useWindowSize().width > 1024 ? (
      <FooterBackgroundDesktop />
    ) : (
      <FooterBackgroundMobile />
    )}
  </div>
);

const SvgIcon = (props) => {
  switch (props.icon) {
    case "Github":
      return <GithubIcon />;
    case "Youtube":
      return <YoutubeIcon />;
    case "Instagram":
      return <InstagramIcon />;
    case "Twitter":
      return <TwitterIcon />;
  }
};

export {
  SvgIcon,
  GithubIcon,
  YoutubeIcon,
  InstagramIcon,
  TwitterIcon,
  FooterBackground,
};
