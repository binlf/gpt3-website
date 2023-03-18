import React from 'react';
import { Feature } from '../../components';
import styles from './WhatGPT3.module.css';

const WhatGPT3 = () => {
  return (
    <div
      className={` ${styles['gpt3__whatgpt3']} section__margin`}
      id="wgpt3"
    >
      <div className={styles['gpt3__whatgpt3-feature']}>
        <Feature
          info={{
            title: 'What is GPT-3',
            text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.',
          }}
        />
      </div>
      <div className={styles['gpt3__whatgpt3-heading']}>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className={styles['gpt3__whatgpt3-container']}>
        <Feature
          info={{
            title: 'Chatbots',
            text: 'We so opinion friends me message as delight. Whole front do of plate heard oh ought. ',
          }}
        />
        <Feature
          info={{
            title: 'Knowledgebase',
            text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments',
          }}
        />
        <Feature
          info={{
            title: 'Education',
            text: 'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments',
          }}
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
