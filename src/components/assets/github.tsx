import React from 'react';

const GithubIcon = ({ width, height }: { width?: string; height?: string }) => (
  <svg width={width || '32'} height={height || '32'} viewBox="0 0 32 32">
    <path d="M29.8535 8.36016C28.4227 5.90873 26.482 3.96793 24.0308 2.53732C21.5792 1.10664 18.9028 0.391479 15.9997 0.391479C13.097 0.391479 10.4197 1.10686 7.96868 2.53732C5.51725 3.96785 3.57659 5.90873 2.14584 8.36016C0.715304 10.8115 0 13.4884 0 16.3908C0 19.8772 1.01717 23.0123 3.05203 25.7968C5.08666 28.5815 7.71511 30.5085 10.9372 31.5778C11.3122 31.6474 11.5899 31.5985 11.7704 31.4322C11.951 31.2657 12.0412 31.0571 12.0412 30.8074C12.0412 30.7658 12.0376 30.3909 12.0307 29.6825C12.0235 28.974 12.0201 28.356 12.0201 27.8286L11.541 27.9115C11.2354 27.9675 10.85 27.9912 10.3847 27.9845C9.91962 27.978 9.43679 27.9293 8.93689 27.8386C8.43677 27.7488 7.9716 27.5405 7.54101 27.2141C7.11065 26.8877 6.80513 26.4605 6.62454 25.9331L6.41621 25.4537C6.27735 25.1345 6.05874 24.78 5.76009 24.3913C5.46143 24.0024 5.15941 23.7387 4.8539 23.5998L4.70803 23.4954C4.61084 23.426 4.52065 23.3423 4.43725 23.2452C4.35392 23.148 4.29153 23.0509 4.24987 22.9535C4.20813 22.8561 4.24272 22.7762 4.35399 22.7135C4.46527 22.6508 4.66637 22.6204 4.95817 22.6204L5.37467 22.6827C5.65246 22.7383 5.99606 22.9046 6.40592 23.1826C6.81557 23.4603 7.15231 23.8213 7.41624 24.2656C7.73584 24.8351 8.12089 25.2692 8.57249 25.5678C9.02372 25.8665 9.47868 26.0155 9.93691 26.0155C10.3952 26.0155 10.7909 25.9808 11.1244 25.9117C11.4575 25.8422 11.77 25.7378 12.0618 25.599C12.1868 24.6681 12.5271 23.953 13.0825 23.4531C12.2909 23.3699 11.5793 23.2446 10.9472 23.078C10.3154 22.9112 9.66255 22.6405 8.98906 22.2651C8.3152 21.8903 7.7562 21.4248 7.31189 20.8696C6.86752 20.314 6.50283 19.5846 6.21832 18.682C5.93368 17.7791 5.79132 16.7376 5.79132 15.5571C5.79132 13.8763 6.34003 12.446 7.43725 11.2654C6.92327 10.0017 6.97179 8.58512 7.58297 7.01572C7.98575 6.89058 8.58307 6.98449 9.37462 7.29687C10.1663 7.60939 10.746 7.87711 11.1142 8.09908C11.4824 8.32097 11.7774 8.50901 11.9996 8.66152C13.2915 8.30054 14.6247 8.12002 15.9996 8.12002C17.3745 8.12002 18.7079 8.30054 19.9999 8.66152L20.7915 8.16176C21.3329 7.82829 21.9722 7.52271 22.7078 7.24492C23.4439 6.96727 24.0068 6.8908 24.3959 7.01594C25.0206 8.58541 25.0763 10.0019 24.5622 11.2656C25.6593 12.4462 26.2082 13.8769 26.2082 15.5573C26.2082 16.7378 26.0654 17.7826 25.7812 18.6925C25.4966 19.6025 25.1288 20.3311 24.6775 20.88C24.2258 21.4288 23.6632 21.8906 22.9897 22.2654C22.3161 22.6404 21.663 22.9111 21.0312 23.0779C20.3992 23.2447 19.6875 23.3701 18.896 23.4534C19.6179 24.0782 19.979 25.0643 19.979 26.4115V30.8068C19.979 31.0565 20.0658 31.265 20.2396 31.4316C20.4132 31.5979 20.6873 31.6468 21.0624 31.5772C24.2849 30.508 26.9133 28.5809 28.9479 25.7962C30.9822 23.0117 31.9998 19.8766 31.9998 16.3902C31.999 13.4882 31.2834 10.8115 29.8535 8.36016Z" />
  </svg>
);

export default GithubIcon;
