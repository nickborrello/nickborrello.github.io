'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getUserProfile } from '../../services/github';
import styles from './CharacterSection.module.css';

const CharacterSection: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>('');

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getUserProfile('octocat');
      if (profile && profile.avatar_url) {
        setAvatarUrl(profile.avatar_url);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className={styles.container}>
      <Image src={avatarUrl} alt="User Avatar" className={styles.avatar} width={100} height={100} />
      <div className={styles.content}>
        <p className={styles.bio}>
          A seasoned adventurer navigating the treacherous landscapes of code...
        </p>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <ul className={styles.skillsList}>
          <li>React</li>
          <li>TypeScript</li>
          <li>Node.js</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterSection;